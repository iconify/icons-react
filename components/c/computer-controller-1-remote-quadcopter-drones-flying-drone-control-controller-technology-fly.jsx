import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j1rkg14-g.css';
import '../../css/o/o_epz1s6t.css';
import '../../css/y/yq53-6c9t.css';
import '../../css/h/hh1mk_bcw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="j1rkg14-g"/><path class="o_epz1s6t"/><circle class="yq53-6c9t"/><circle class="hh1mk_bcw"/></g>`,
		"fallback": "streamline:computer-controller-1-remote-quadcopter-drones-flying-drone-control-controller-technology-fly",
	});
}

export default Component;
