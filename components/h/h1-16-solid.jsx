import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7wgwdbqd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7wgwdbqd"/>`,
		"fallback": "heroicons:h1-16-solid",
	});
}

export default Component;
