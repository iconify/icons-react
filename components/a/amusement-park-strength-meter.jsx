import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gnd16-elx.css';
import '../../css/k/kxo4d5bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gnd16-elx"/><path class="kxo4d5bav"/></g>`,
		"fallback": "streamline-freehand:amusement-park-strength-meter",
	});
}

export default Component;
