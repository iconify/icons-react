import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vb-6nub4h.css';
import '../../css/k/ka15bjs8r.css';
import '../../css/l/llj9_4uls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vb-6nub4h"/><path class="ka15bjs8r"/><path class="llj9_4uls"/></g>`,
		"fallback": "streamline-ultimate:analytics-mountain",
	});
}

export default Component;
