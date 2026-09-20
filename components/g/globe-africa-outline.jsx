import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mny8t1bou.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mny8t1bou"/>`,
		"fallback": "teenyicons:globe-africa-outline",
	});
}

export default Component;
