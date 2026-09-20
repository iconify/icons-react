import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruxc2r0ie.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruxc2r0ie"/>`,
		"fallback": "selfhst:google-news-dark",
	});
}

export default Component;
