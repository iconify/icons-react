import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dh6y1nplp.css';
import '../../css/k/k-r6zjezk.css';
import '../../css/p/pp3jceyyl.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dh6y1nplp"/><path class="k-r6zjezk"/><circle transform="rotate(90 12 7.16)" class="pp3jceyyl"/><path class="khdkximwp"/></g>`,
		"fallback": "andrsrxn:accessibility-circle",
	});
}

export default Component;
