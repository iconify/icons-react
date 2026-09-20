import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naw5s4b9n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naw5s4b9n"/>`,
		"fallback": "selfhst:google-light",
	});
}

export default Component;
