import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwjt238zg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwjt238zg"/>`,
		"fallback": "selfhst:elastic-dark",
	});
}

export default Component;
