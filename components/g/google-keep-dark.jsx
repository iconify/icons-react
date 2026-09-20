import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plsk20n4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plsk20n4f"/>`,
		"fallback": "selfhst:google-keep-dark",
	});
}

export default Component;
