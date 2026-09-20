import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgbsu93mo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgbsu93mo"/>`,
		"fallback": "selfhst:europris-dark",
	});
}

export default Component;
