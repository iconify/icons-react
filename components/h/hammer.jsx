import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-rkt1bvw.css';
import '../../css/p/pyt928dnj.css';
import '../../css/t/totbeccrq.css';
import '../../css/q/qogv74beg.css';
import '../../css/m/md5w8vb6f.css';
import '../../css/h/hoeh50q0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l-rkt1bvw"/><path class="pyt928dnj"/><path class="totbeccrq"/><path class="qogv74beg"/><path class="md5w8vb6f"/><path class="hoeh50q0f"/></g>`,
		"fallback": "streamline-cyber-color:hammer",
	});
}

export default Component;
