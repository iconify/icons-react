import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9wbsk_vb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9wbsk_vb"/>`,
		"fallback": "selfhst:imdb-dark",
	});
}

export default Component;
