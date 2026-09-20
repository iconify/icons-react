import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5286ob_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5286ob_t"/>`,
		"fallback": "selfhst:blender-dark",
	});
}

export default Component;
