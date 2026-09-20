import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zbli7_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zbli7_p"/>`,
		"fallback": "selfhst:byparr-dark",
	});
}

export default Component;
