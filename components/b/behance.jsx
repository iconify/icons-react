import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq82k-blg.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq82k-blg"/>`,
		"fallback": "zmdi:behance",
	});
}

export default Component;
