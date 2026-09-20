import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/banr10v6c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="banr10v6c"/>`,
		"fallback": "teenyicons:eye-closed-outline",
	});
}

export default Component;
