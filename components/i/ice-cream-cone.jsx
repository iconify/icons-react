import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgib3ubrn.css';
import '../../css/l/lwox9cc-w.css';
import '../../css/w/wwzq2hb9q.css';
import '../../css/g/giwwpbbyy.css';
import '../../css/h/hoxdrqbvi.css';
import '../../css/k/k50ow2b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wgib3ubrn"/><path class="lwox9cc-w"/><path class="wwzq2hb9q"/><path class="giwwpbbyy"/><path class="hoxdrqbvi"/><path class="k50ow2b4d"/></g>`,
		"fallback": "streamline-ultimate-color:ice-cream-cone",
	});
}

export default Component;
