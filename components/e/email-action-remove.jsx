import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p4z_80bao.css';
import '../../css/r/r1_nx5gio.css';
import '../../css/j/j-7zepbef.css';
import '../../css/o/oecjcubkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="p4z_80bao"/><path class="r1_nx5gio"/><path class="j-7zepbef"/><path class="oecjcubkp"/></g>`,
		"fallback": "streamline-freehand:email-action-remove",
	});
}

export default Component;
