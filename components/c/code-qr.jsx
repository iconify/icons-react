import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s-6b-h1do.css';
import '../../css/h/h0mz56qad.css';
import '../../css/w/wtotfkwny.css';
import '../../css/b/bkqrqjg7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s-6b-h1do"/><path class="h0mz56qad"/><path class="wtotfkwny"/><path class="bkqrqjg7w"/></g>`,
		"fallback": "streamline-freehand-color:code-qr",
	});
}

export default Component;
