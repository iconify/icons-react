import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t49gsozdu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t49gsozdu"/>`,
		"fallback": "selfhst:evsy-dark",
	});
}

export default Component;
