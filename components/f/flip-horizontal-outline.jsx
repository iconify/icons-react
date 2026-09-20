import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_llhuate.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_llhuate"/>`,
		"fallback": "teenyicons:flip-horizontal-outline",
	});
}

export default Component;
