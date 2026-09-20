import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kgx5ug76u.css';
import '../../css/i/inssfsb3y.css';
import '../../css/n/nzljxzvhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="kgx5ug76u"/><path class="inssfsb3y"/><path class="nzljxzvhg"/></g>`,
		"fallback": "streamline-cyber:confetti-popper",
	});
}

export default Component;
