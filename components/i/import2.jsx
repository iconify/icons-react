import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q86jc-i-m.css';
import '../../css/k/k7ky6prup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q86jc-i-m"/><path class="k7ky6prup"/></g>`,
		"fallback": "reicon:import2",
	});
}

export default Component;
