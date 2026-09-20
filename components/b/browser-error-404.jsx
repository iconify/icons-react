import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zmev91wze.css';
import '../../css/k/k8bcu_t5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zmev91wze"/><path class="k8bcu_t5f"/></g>`,
		"fallback": "streamline-sharp:browser-error-404",
	});
}

export default Component;
