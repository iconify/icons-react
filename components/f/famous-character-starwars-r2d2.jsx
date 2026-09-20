import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iclz3tbzj.css';
import '../../css/b/b583_jbsq.css';
import '../../css/q/qxgmazbnx.css';
import '../../css/o/ocijzhb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iclz3tbzj"/><path class="b583_jbsq"/><path class="qxgmazbnx"/><path class="ocijzhb_o"/></g>`,
		"fallback": "streamline-freehand:famous-character-starwars-r2d2",
	});
}

export default Component;
