import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bo7nhnbsw.css';
import '../../css/n/n18lttbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bo7nhnbsw"/><path class="n18lttbuz"/></g>`,
		"fallback": "solar:chevrons-left-right-linear",
	});
}

export default Component;
