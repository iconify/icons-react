import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zu-ux3bfk.css';
import '../../css/h/ht6_tfbrd.css';
import '../../css/r/rh4ip8yrd.css';
import '../../css/w/waw1v4lte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zu-ux3bfk"/><path class="ht6_tfbrd"/><path class="rh4ip8yrd"/><path class="waw1v4lte"/></g>`,
		"fallback": "streamline-freehand-color:cellular-network-wifi-3g",
	});
}

export default Component;
