import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq_kpr7ph.css';
import '../../css/r/rryt3j5qq.css';
import '../../css/n/n-shmacqo.css';
import '../../css/j/jtgc0918l.css';
import '../../css/a/axvfpvbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mq_kpr7ph"/><path class="rryt3j5qq"/><path class="n-shmacqo"/><path class="jtgc0918l"/><path class="axvfpvbnf"/></g>`,
		"fallback": "streamline-ultimate-color:hospital-house",
	});
}

export default Component;
