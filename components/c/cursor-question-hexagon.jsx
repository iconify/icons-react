import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s3evry5lk.css';
import '../../css/m/mjxg2-bbm.css';
import '../../css/y/y__ao-b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="s3evry5lk"/><path class="mjxg2-bbm"/><path class="y__ao-b7v"/></g>`,
		"fallback": "streamline-cyber:cursor-question-hexagon",
	});
}

export default Component;
