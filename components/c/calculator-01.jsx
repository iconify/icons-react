import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/her8kwbdd.css';
import '../../css/t/to9oudbka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="her8kwbdd"/><path class="to9oudbka"/></g>`,
		"fallback": "hugeicons:calculator-01",
	});
}

export default Component;
