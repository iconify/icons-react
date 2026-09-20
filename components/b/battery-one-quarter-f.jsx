import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpi01cc4i.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpi01cc4i"/>`,
		"fallback": "jam:battery-one-quarter-f",
	});
}

export default Component;
