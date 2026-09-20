import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_t41-uxm.css';
import '../../css/z/zn2buv2un.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_t41-uxm"/><path class="zn2buv2un"/>`,
		"fallback": "material-icon-theme:folder-ui",
	});
}

export default Component;
