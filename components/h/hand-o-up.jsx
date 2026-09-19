import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dufl35bfe.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dufl35bfe"/>`,
		"fallback": "fa:hand-o-up",
	});
}

export default Component;
