import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2555zbkg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2555zbkg"/>`,
		"fallback": "teenyicons:google-outline",
	});
}

export default Component;
