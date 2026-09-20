import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as7t9kaju.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as7t9kaju"/>`,
		"fallback": "selfhst:dashwise-dark",
	});
}

export default Component;
