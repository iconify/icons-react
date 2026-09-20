import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceuecc10c.css';
import '../../css/d/dpy7q7boi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceuecc10c"/><path class="dpy7q7boi"/>`,
		"fallback": "material-icon-theme:folder-cloudflare",
	});
}

export default Component;
