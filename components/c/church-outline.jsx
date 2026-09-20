import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx6kp1g_z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx6kp1g_z"/>`,
		"fallback": "teenyicons:church-outline",
	});
}

export default Component;
