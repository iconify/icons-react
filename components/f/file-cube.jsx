import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9gl308hz.css';
import '../../css/r/rwk9wvbnj.css';
import '../../css/t/ton8sfk3l.css';
import '../../css/n/n1ox7wpzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9gl308hz"/><path class="rwk9wvbnj"/><path class="ton8sfk3l"/><path class="n1ox7wpzu"/></g>`,
		"fallback": "andrsrxn:file-cube",
	});
}

export default Component;
