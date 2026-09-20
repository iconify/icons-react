import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s37u5-ydv.css';
import '../../css/m/m3pjiwe1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s37u5-ydv"/><path class="m3pjiwe1t"/>`,
		"fallback": "material-icon-theme:folder-nuxt-open",
	});
}

export default Component;
