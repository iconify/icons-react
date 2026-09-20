import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjygb7bcf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjygb7bcf"/>`,
		"fallback": "teenyicons:grid-layout-outline",
	});
}

export default Component;
