import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u6hb_jkbf.css';
import '../../css/p/pmhz6bbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u6hb_jkbf"/><path class="pmhz6bbml"/></g>`,
		"fallback": "hugeicons:bitcoin-02",
	});
}

export default Component;
