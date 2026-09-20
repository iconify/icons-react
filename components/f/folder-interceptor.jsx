import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbnjf8b6m.css';
import '../../css/k/k9nz5w0-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbnjf8b6m"/><path class="k9nz5w0-m"/>`,
		"fallback": "material-icon-theme:folder-interceptor",
	});
}

export default Component;
