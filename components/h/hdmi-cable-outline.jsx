import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juxektbhk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juxektbhk"/>`,
		"fallback": "teenyicons:hdmi-cable-outline",
	});
}

export default Component;
