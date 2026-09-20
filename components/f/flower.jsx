import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oaprlkznb.css';
import '../../css/w/w5qlhtw1z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oaprlkznb"/><path class="w5qlhtw1z"/></g>`,
		"fallback": "streamline:flower",
	});
}

export default Component;
