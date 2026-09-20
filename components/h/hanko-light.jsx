import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqr77ac-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqr77ac-z"/>`,
		"fallback": "selfhst:hanko-light",
	});
}

export default Component;
