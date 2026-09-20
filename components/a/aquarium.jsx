import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxa23ha5t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxa23ha5t"/>`,
		"fallback": "map:aquarium",
	});
}

export default Component;
