import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ek75b5bcn.css';
import '../../css/h/h6n7m_bjv.css';
import '../../css/u/unaw5kbcb.css';
import '../../css/v/vm305za0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ek75b5bcn"/><path class="h6n7m_bjv"/><path class="unaw5kbcb"/><path class="vm305za0x"/></g>`,
		"fallback": "andrsrxn:folder-cube",
	});
}

export default Component;
