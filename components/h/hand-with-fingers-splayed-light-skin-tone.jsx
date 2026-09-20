import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kirpojbqd.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kirpojbqd"/><path class="acwejz0_o"/>`,
		"fallback": "openmoji:hand-with-fingers-splayed-light-skin-tone",
	});
}

export default Component;
