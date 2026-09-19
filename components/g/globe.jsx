import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tlpz02qyr.css';
import '../../css/b/bp1dflhdl.css';
import '../../css/a/asqd14bur.css';
import '../../css/w/w7adcibse.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="tlpz02qyr"/><path class="bp1dflhdl"/><path class="asqd14bur"/><path class="w7adcibse"/></g>`,
		"fallback": "charm:globe",
	});
}

export default Component;
