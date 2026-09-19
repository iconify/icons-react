import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0dprtbui.css';
import '../../css/v/vejlu9bnn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="z0dprtbui"/><path class="vejlu9bnn"/></g>`,
		"fallback": "cryptocurrency-color:bat",
	});
}

export default Component;
