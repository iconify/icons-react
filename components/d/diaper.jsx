import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zpihk_bma.css';
import '../../css/e/evn5u678o.css';
import '../../css/n/nkwunfxao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zpihk_bma"/><path class="evn5u678o"/><path class="nkwunfxao"/></g>`,
		"fallback": "andrsrxn:diaper",
	});
}

export default Component;
