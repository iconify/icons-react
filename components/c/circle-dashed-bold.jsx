import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjzgf8n8h.css';
import '../../css/b/byt7nmbnt.css';
import '../../css/d/d4_ei1b8v.css';
import '../../css/z/zq2p5ccmf.css';
import '../../css/l/lumf_rb6e.css';
import '../../css/d/dlb0mbb_l.css';
import '../../css/b/bmwugacqa.css';
import '../../css/k/kyld35b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjzgf8n8h"/><path class="byt7nmbnt"/><path class="d4_ei1b8v"/><path class="zq2p5ccmf"/><path class="lumf_rb6e"/><path class="dlb0mbb_l"/><path class="bmwugacqa"/><path class="kyld35b4n"/>`,
		"fallback": "solar:circle-dashed-bold",
	});
}

export default Component;
