import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/whd92oi0d.css';
import '../../css/a/aud40yyqp.css';
import '../../css/i/ikl0agb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="whd92oi0d"/><path class="aud40yyqp"/><path class="ikl0agb7y"/></g>`,
		"fallback": "matita:circle-plus",
	});
}

export default Component;
