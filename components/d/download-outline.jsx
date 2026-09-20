import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml90et9yu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml90et9yu"/>`,
		"fallback": "teenyicons:download-outline",
	});
}

export default Component;
