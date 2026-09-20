import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq1hv3m9a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq1hv3m9a"/>`,
		"fallback": "selfhst:google-fi-dark",
	});
}

export default Component;
