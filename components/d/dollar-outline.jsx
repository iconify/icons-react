import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i923-abes.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i923-abes"/>`,
		"fallback": "teenyicons:dollar-outline",
	});
}

export default Component;
