import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga_pevbou.css';
import '../../css/l/l4e8jrifk.css';
import '../../css/p/pa3mvwego.css';
import '../../css/g/gkrjracny.css';
import '../../css/k/k7o1iabmx.css';
import '../../css/q/qhw42wpsm.css';
import '../../css/l/lj2qtrshg.css';
import '../../css/c/cwau5jbon.css';
import '../../css/l/l_-q0950d.css';
import '../../css/m/mlo17xbtk.css';
import '../../css/a/asel9bk1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga_pevbou"/><path class="l4e8jrifk"/><path class="pa3mvwego"/><path class="gkrjracny"/><path class="k7o1iabmx"/><path class="qhw42wpsm"/><path class="lj2qtrshg"/><path class="cwau5jbon"/><path class="l_-q0950d"/><path class="mlo17xbtk"/><path class="asel9bk1v"/>`,
		"fallback": "streamline-emojis:bird-2",
	});
}

export default Component;
