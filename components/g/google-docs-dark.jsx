import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxk51mbgs.css';
import '../../css/e/euu0cowqs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxk51mbgs"/><path class="euu0cowqs"/>`,
		"fallback": "selfhst:google-docs-dark",
	});
}

export default Component;
