import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie5ghf9ci.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie5ghf9ci"/>`,
		"fallback": "selfhst:anonymousoverflow-dark",
	});
}

export default Component;
