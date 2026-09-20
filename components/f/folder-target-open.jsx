import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s27ky2-ij.css';
import '../../css/e/eozy0wknl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s27ky2-ij"/><path class="eozy0wknl"/>`,
		"fallback": "material-icon-theme:folder-target-open",
	});
}

export default Component;
