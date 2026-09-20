import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s5vwdibel.css';
import '../../css/t/tz6att19d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s5vwdibel"/><path class="tz6att19d"/></g>`,
		"fallback": "streamline:cone-shape",
	});
}

export default Component;
