import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm9w7kb-z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm9w7kb-z"/>`,
		"fallback": "selfhst:airsonic-light",
	});
}

export default Component;
