import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hexirubbb.css';
import '../../css/u/usdqb9bio.css';
import '../../css/q/qnqtrvabq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="hexirubbb"/><path class="usdqb9bio"/><path class="qnqtrvabq"/></g>`,
		"fallback": "hugeicons:credit-card-change",
	});
}

export default Component;
