import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s27ky2-ij.css';
import '../../css/s/sga5kfb0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s27ky2-ij"/><path class="sga5kfb0i"/>`,
		"fallback": "material-icon-theme:folder-admin-open",
	});
}

export default Component;
