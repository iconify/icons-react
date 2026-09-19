import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tjn30lbcn.css';
import '../../css/d/d8d6hu87u.css';
import '../../css/s/sc-zjlc7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tjn30lbcn"/><path class="d8d6hu87u"/><path class="sc-zjlc7f"/></g>`,
		"fallback": "fluent-emoji-flat:basket",
	});
}

export default Component;
