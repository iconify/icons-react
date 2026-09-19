import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ok6k5b6nb.css';
import '../../css/e/emdkxcbdp.css';
import '../../css/o/owc868bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ok6k5b6nb"/><path class="emdkxcbdp"/><path class="owc868bvm"/></g>`,
		"fallback": "covid:covid-19-virus-pandemic-1",
	});
}

export default Component;
