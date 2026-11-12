import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo_0kftwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo_0kftwy"/>`,
		"fallback": "selfhst:authgear-dark",
	});
}

export default Component;
