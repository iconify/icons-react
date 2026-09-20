import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzcuuibev.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzcuuibev"/>`,
		"fallback": "teenyicons:border-left-outline",
	});
}

export default Component;
