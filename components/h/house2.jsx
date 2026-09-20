import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lg-447b1o.css';
import '../../css/q/qijvpibrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lg-447b1o"/><path class="qijvpibrx"/></g>`,
		"fallback": "reicon:house2",
	});
}

export default Component;
