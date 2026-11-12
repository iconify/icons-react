import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn4nbmbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn4nbmbjc"/>`,
		"fallback": "selfhst:immich-kiosk-dark",
	});
}

export default Component;
