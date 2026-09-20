import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m02shab3s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m02shab3s"/>`,
		"fallback": "selfhst:bookhaven-dark",
	});
}

export default Component;
