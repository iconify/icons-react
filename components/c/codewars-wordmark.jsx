import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upq7_ybsc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upq7_ybsc"/>`,
		"fallback": "devicon-plain:codewars-wordmark",
	});
}

export default Component;
