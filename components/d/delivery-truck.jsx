import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jn1bq4b3o.css';
import '../../css/r/ro85quuro.css';
import '../../css/l/lopkaybnz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jn1bq4b3o"/><path class="ro85quuro"/><path class="lopkaybnz"/></g>`,
		"fallback": "marketeq:delivery-truck",
	});
}

export default Component;
