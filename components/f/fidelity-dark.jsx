import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r527d0bet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r527d0bet"/>`,
		"fallback": "selfhst:fidelity-dark",
	});
}

export default Component;
