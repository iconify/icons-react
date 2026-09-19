import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf4uuwbti.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf4uuwbti"/>`,
		"fallback": "zmdi:aspect-ratio",
	});
}

export default Component;
