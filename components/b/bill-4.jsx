import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j3yhsjnzu.css';
import '../../css/n/n5vsybcpa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j3yhsjnzu"/><path class="n5vsybcpa"/></g>`,
		"fallback": "streamline:bill-4",
	});
}

export default Component;
