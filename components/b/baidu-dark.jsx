import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5gxi1nof.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5gxi1nof"/>`,
		"fallback": "selfhst:baidu-dark",
	});
}

export default Component;
