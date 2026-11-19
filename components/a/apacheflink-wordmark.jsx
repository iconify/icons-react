import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqcfp_zlr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqcfp_zlr"/>`,
		"fallback": "devicon-plain:apacheflink-wordmark",
	});
}

export default Component;
