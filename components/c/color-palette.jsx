import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ouh28gbcj.css';
import '../../css/i/igzn2xqsy.css';
import '../../css/i/ilwaa5qlq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ouh28gbcj"/><path class="igzn2xqsy"/><path class="ilwaa5qlq"/></g>`,
		"fallback": "streamline:color-palette",
	});
}

export default Component;
