import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r95xtcble.css';

const viewBox = {"width":193.2,"height":58.2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r95xtcble"/>`,
		"fallback": "thesvg-color:avid-dark",
	});
}

export default Component;
