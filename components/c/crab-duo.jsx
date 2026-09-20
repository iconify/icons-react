import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/q/qr3pchbrt.css';
import '../../css/t/tx_ynpbcw.css';
import '../../css/b/bvt1qdb-o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path class="qr3pchbrt"/><path clip-rule="evenodd" class="tx_ynpbcw"/><path class="bvt1qdb-o"/></g>`,
		"fallback": "streamline-kameleon-color:crab-duo",
	});
}

export default Component;
