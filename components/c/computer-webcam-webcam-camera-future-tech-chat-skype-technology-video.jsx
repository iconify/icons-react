import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qidn0kbwc.css';
import '../../css/z/zho1g5b6o.css';
import '../../css/v/v-dgwpbfs.css';
import '../../css/t/tzdh63mvr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="qidn0kbwc"/><path class="zho1g5b6o"/><circle class="v-dgwpbfs"/><circle class="tzdh63mvr"/></g>`,
		"fallback": "streamline:computer-webcam-webcam-camera-future-tech-chat-skype-technology-video",
	});
}

export default Component;
