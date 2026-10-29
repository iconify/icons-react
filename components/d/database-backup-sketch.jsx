import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ux1czdvjz.css';
import '../../css/f/f3bhxkbab.css';
import '../../css/g/gnv3lskjt.css';
import '../../css/w/wq7o2sa3p.css';
import '../../css/b/b9ya41b6p.css';
import '../../css/k/kp9ps0b7s.css';
import '../../css/p/p14itpbmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ux1czdvjz"/><path class="f3bhxkbab wm-k"/><path class="gnv3lskjt wm-a"/><path class="wm-s wq7o2sa3p"/><path class="b9ya41b6p wm-k"/><path class="kp9ps0b7s wm-a"/><path class="p14itpbmt wm-s"/></g>`,
		"fallback": "withicons:database-backup-sketch",
	});
}

export default Component;
