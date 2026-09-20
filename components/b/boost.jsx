import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgf2vobjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgf2vobjt"/>`,
		"fallback": "simple-icons:boost",
	});
}

export default Component;
