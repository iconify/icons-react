import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yln253a1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yln253a1d"/>`,
		"fallback": "selfhst:graphite-dark",
	});
}

export default Component;
