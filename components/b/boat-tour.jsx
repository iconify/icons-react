import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivqjku9uo.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivqjku9uo"/>`,
		"fallback": "map:boat-tour",
	});
}

export default Component;
