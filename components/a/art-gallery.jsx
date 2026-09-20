import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1g812byc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r1g812byc"/>`,
		"fallback": "map:art-gallery",
	});
}

export default Component;
