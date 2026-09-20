import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co2lme0xd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co2lme0xd"/>`,
		"fallback": "selfhst:hook0-dark",
	});
}

export default Component;
