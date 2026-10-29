import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/os-fgmamw.css';
import '../../css/i/in0agd6nm.css';
import '../../css/f/fzaba2bnm.css';
import '../../css/a/af1lg4blq.css';
import '../../css/s/sbnuhvbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="os-fgmamw"/><path class="in0agd6nm wm-k"/><path class="fzaba2bnm wm-a"/><path class="af1lg4blq wm-k"/><path class="sbnuhvbhi wm-a"/></g>`,
		"fallback": "withicons:frown-sketch",
	});
}

export default Component;
