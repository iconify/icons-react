import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wunxpj0up.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wunxpj0up"/>`,
		"fallback": "selfhst:forte-dark",
	});
}

export default Component;
