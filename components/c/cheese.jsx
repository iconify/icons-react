import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/svrgwt6gp.css';
import '../../css/b/bnyw75g8e.css';
import '../../css/h/hey8bu02y.css';
import '../../css/b/b2xz67o6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="svrgwt6gp"/><path class="bnyw75g8e"/><path class="hey8bu02y"/><path class="b2xz67o6u"/></g>`,
		"fallback": "streamline-cyber:cheese",
	});
}

export default Component;
