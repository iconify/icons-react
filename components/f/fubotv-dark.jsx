import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdcc6fbim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdcc6fbim"/>`,
		"fallback": "selfhst:fubotv-dark",
	});
}

export default Component;
