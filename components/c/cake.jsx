import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/o/o7nvpq57o.css';
import '../../css/f/f30pbdbez.css';
import '../../css/o/ohyczpkjk.css';
import '../../css/w/w_fx7s3su.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="o7nvpq57o"/><path class="f30pbdbez"/><path class="ohyczpkjk"/><path class="w_fx7s3su"/></g>`,
		"fallback": "icon-park:cake",
	});
}

export default Component;
