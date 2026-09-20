import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv8-lrn5y.css';
import '../../css/k/k9nz5w0-m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv8-lrn5y"/><path class="k9nz5w0-m"/>`,
		"fallback": "material-icon-theme:folder-interceptor-open",
	});
}

export default Component;
