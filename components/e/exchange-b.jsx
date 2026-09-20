import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w-1seubsl.css';
import '../../css/j/jmxdyfpxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w-1seubsl"/><path class="jmxdyfpxz"/></g>`,
		"fallback": "mage:exchange-b",
	});
}

export default Component;
