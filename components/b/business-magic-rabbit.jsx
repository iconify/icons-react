import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ox8iemb4v.css';
import '../../css/d/d9mcj2b2b.css';
import '../../css/l/l_1p3ac_u.css';
import '../../css/f/fsqrxq_4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ox8iemb4v"/><path class="d9mcj2b2b"/><path class="l_1p3ac_u"/><path class="fsqrxq_4f"/></g>`,
		"fallback": "streamline-cyber-color:business-magic-rabbit",
	});
}

export default Component;
