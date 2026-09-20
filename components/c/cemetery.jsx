import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm0rmt9ol.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm0rmt9ol"/>`,
		"fallback": "map:cemetery",
	});
}

export default Component;
