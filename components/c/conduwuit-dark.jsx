import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szu_-8m4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szu_-8m4p"/>`,
		"fallback": "selfhst:conduwuit-dark",
	});
}

export default Component;
