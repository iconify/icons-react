import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyf1f2g-v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyf1f2g-v"/>`,
		"fallback": "devicon-plain:awk-wordmark",
	});
}

export default Component;
