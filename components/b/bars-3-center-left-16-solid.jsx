import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdo3n95-y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wdo3n95-y"/>`,
		"fallback": "heroicons:bars-3-center-left-16-solid",
	});
}

export default Component;
