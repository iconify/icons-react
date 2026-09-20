import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw9uy4btr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw9uy4btr"/>`,
		"fallback": "selfhst:cloudnativepg-dark",
	});
}

export default Component;
