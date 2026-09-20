import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsi-k6tgg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsi-k6tgg"/>`,
		"fallback": "selfhst:crunchyroll-light",
	});
}

export default Component;
