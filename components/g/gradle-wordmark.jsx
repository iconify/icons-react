import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld9e0dbmm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld9e0dbmm"/>`,
		"fallback": "devicon:gradle-wordmark",
	});
}

export default Component;
