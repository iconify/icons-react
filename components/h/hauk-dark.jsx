import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp2bmljol.css';
import '../../css/i/i7dds8b3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp2bmljol"/><path class="i7dds8b3z"/>`,
		"fallback": "selfhst:hauk-dark",
	});
}

export default Component;
