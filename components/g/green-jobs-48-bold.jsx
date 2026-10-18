import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqidrqohi.css';
import '../../css/m/mq0070biz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqidrqohi"/><path class="mq0070biz"/>`,
		"fallback": "energy-icons:green-jobs-48-bold",
	});
}

export default Component;
