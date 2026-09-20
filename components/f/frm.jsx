import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgxln0b_c.css';
import '../../css/h/hlm14cb_n.css';
import '../../css/h/h-clu1byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgxln0b_c"/><path class="hlm14cb_n"/><path class="h-clu1byv"/>`,
		"fallback": "token:frm",
	});
}

export default Component;
