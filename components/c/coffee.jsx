import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e_ss3q__z.css';
import '../../css/q/qjsrdi4zw.css';
import '../../css/q/qid97gbnp.css';
import '../../css/u/ua25fxg7u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e_ss3q__z"/><path class="qjsrdi4zw"/><path class="qid97gbnp"/><path class="ua25fxg7u"/></g>`,
		"fallback": "matita:coffee",
	});
}

export default Component;
