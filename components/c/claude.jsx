import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epu8qq1sl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epu8qq1sl"/>`,
		"fallback": "selfhst:claude",
	});
}

export default Component;
