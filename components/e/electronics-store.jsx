import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/heuf896sx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="heuf896sx"/>`,
		"fallback": "map:electronics-store",
	});
}

export default Component;
