import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfiofnb8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfiofnb8s"/>`,
		"fallback": "selfhst:beestation-light",
	});
}

export default Component;
