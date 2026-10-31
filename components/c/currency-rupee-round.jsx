import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecn-l84yx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecn-l84yx"/>`,
		"fallback": "coolicons:currency-rupee-round",
	});
}

export default Component;
