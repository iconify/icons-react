import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9fcafbxb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9fcafbxb"/>`,
		"fallback": "streamline:circle-solid",
	});
}

export default Component;
