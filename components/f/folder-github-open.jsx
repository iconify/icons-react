import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s27ky2-ij.css';
import '../../css/l/lu-es3w6h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s27ky2-ij"/><path class="lu-es3w6h"/>`,
		"fallback": "material-icon-theme:folder-github-open",
	});
}

export default Component;
