import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g0u8lo1sp.css';
import '../../css/k/kk5y-tbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g0u8lo1sp"/><path class="kk5y-tbvy"/></g>`,
		"fallback": "hugeicons:archive-01",
	});
}

export default Component;
