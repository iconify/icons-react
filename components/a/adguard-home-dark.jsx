import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcwo0ib5a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcwo0ib5a"/>`,
		"fallback": "selfhst:adguard-home-dark",
	});
}

export default Component;
