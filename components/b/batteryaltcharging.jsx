import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa19cjbet.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa19cjbet"/>`,
		"fallback": "whh:batteryaltcharging",
	});
}

export default Component;
