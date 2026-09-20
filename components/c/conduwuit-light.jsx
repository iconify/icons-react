import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihiv9sbvp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihiv9sbvp"/>`,
		"fallback": "selfhst:conduwuit-light",
	});
}

export default Component;
