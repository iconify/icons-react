import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9_oerbeu.css';
import '../../css/p/po_whzbui.css';
import '../../css/x/xw57btzgo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9_oerbeu"/><path class="po_whzbui"/><path class="xw57btzgo"/></g>`,
		"fallback": "fluent-emoji-flat:gloves",
	});
}

export default Component;
