import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo2nr-8ym.css';
import '../../css/r/r2pc7_j-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bo2nr-8ym"/><path class="r2pc7_j-i"/></g>`,
		"fallback": "andrsrxn:chart-increase",
	});
}

export default Component;
