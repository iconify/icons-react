import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b70jd7d4m.css';
import '../../css/t/t20t2zb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b70jd7d4m"/><path class="t20t2zb9n"/></g>`,
		"fallback": "streamline-ultimate:currency-yuan-bubble",
	});
}

export default Component;
