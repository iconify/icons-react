import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aywch1mse.css';
import '../../css/o/ovj99gbqx.css';
import '../../css/q/q0upuzb_s.css';

const viewBox = {"width":1081,"height":309};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aywch1mse"/><path clip-rule="evenodd" class="ovj99gbqx"/><path class="q0upuzb_s"/>`,
		"fallback": "thesvg:alpaca",
	});
}

export default Component;
