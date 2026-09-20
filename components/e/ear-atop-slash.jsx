import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q32_3-bnv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q32_3-bnv"/>`,
		"fallback": "pinhead:ear-atop-slash",
	});
}

export default Component;
