import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nac1dwsdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nac1dwsdk"/>`,
		"fallback": "selfhst:google-maps-dark",
	});
}

export default Component;
