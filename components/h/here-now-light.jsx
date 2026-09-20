import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bao__7m5p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bao__7m5p"/>`,
		"fallback": "selfhst:here-now-light",
	});
}

export default Component;
