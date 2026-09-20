import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edmo9b0vv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edmo9b0vv"/>`,
		"fallback": "selfhst:humhub-dark",
	});
}

export default Component;
