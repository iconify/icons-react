import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdf1evbrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdf1evbrh"/>`,
		"fallback": "selfhst:commento-dark",
	});
}

export default Component;
