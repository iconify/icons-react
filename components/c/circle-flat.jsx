import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9d05fmzy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9d05fmzy"/>`,
		"fallback": "streamline-color:circle-flat",
	});
}

export default Component;
