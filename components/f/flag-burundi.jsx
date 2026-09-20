import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/j/ju5w-hbwh.css';
import '../../css/a/apalkzuvh.css';
import '../../css/o/o2pgs90cr.css';
import '../../css/c/c2iq2zbkh.css';
import '../../css/y/y4njxbbgs.css';
import '../../css/k/ktyf4rpev.css';
import '../../css/j/jb_5hccnk.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="ju5w-hbwh"/><path class="apalkzuvh"/><circle class="o2pgs90cr"/><circle class="c2iq2zbkh"/><circle class="y4njxbbgs"/><circle class="ktyf4rpev"/><path class="jb_5hccnk"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-burundi",
	});
}

export default Component;
