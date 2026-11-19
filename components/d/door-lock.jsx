import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jofpur1-s.css';
import '../../css/f/f8byjfgpw.css';
import '../../css/e/e8gpwmbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jofpur1-s"/><path class="f8byjfgpw"/><path class="e8gpwmbft"/></g>`,
		"fallback": "andrsrxn:door-lock",
	});
}

export default Component;
