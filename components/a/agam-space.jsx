import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-jjq0cjo.css';
import '../../css/b/bzhd89bhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-jjq0cjo"/><path class="bzhd89bhr"/>`,
		"fallback": "selfhst:agam-space",
	});
}

export default Component;
