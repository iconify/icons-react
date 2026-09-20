import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zamm8q_ux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zamm8q_ux"/>`,
		"fallback": "selfhst:anibridge-dark",
	});
}

export default Component;
