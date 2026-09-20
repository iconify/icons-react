import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh-v-bczu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh-v-bczu"/>`,
		"fallback": "selfhst:dailytxt-dark",
	});
}

export default Component;
