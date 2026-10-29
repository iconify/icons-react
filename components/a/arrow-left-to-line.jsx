import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5mml_btp.css';
import '../../css/g/gh3_ljb4l.css';
import '../../css/b/ba19ar0os.css';
import '../../css/q/ql11oggnt.css';
import '../../css/o/ot2p8zh9p.css';
import '../../css/l/l0xq8m5ym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w5mml_btp wm-k"/><path class="gh3_ljb4l wm-k"/><path class="ba19ar0os wm-k"/><path class="ql11oggnt wm-a"/><path class="ot2p8zh9p wm-a"/><path class="l0xq8m5ym wm-a"/></g>`,
		"fallback": "withicons-anime:arrow-left-to-line",
	});
}

export default Component;
