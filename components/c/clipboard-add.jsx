import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s60etfb8v.css';
import '../../css/a/abgf2mrlj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s60etfb8v"/><path class="abgf2mrlj"/></g>`,
		"fallback": "streamline:clipboard-add",
	});
}

export default Component;
