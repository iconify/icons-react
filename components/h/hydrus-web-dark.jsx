import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjafvc-tm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjafvc-tm"/>`,
		"fallback": "selfhst:hydrus-web-dark",
	});
}

export default Component;
