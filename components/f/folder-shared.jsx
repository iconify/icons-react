import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_t41-uxm.css';
import '../../css/s/sx1789nbd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_t41-uxm"/><path class="sx1789nbd"/>`,
		"fallback": "material-icon-theme:folder-shared",
	});
}

export default Component;
