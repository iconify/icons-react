import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww53_jbwr.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww53_jbwr"/>`,
		"fallback": "devicon-plain:apachespark-wordmark",
	});
}

export default Component;
