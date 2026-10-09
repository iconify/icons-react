import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1acbcxl.css';
import '../../css/g/g127gxnyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in1acbcxl"/><path class="g127gxnyr"/>`,
		"fallback": "energy-icons:electric-bus-48",
	});
}

export default Component;
