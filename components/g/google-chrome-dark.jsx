import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u767w3b4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u767w3b4j"/>`,
		"fallback": "selfhst:google-chrome-dark",
	});
}

export default Component;
