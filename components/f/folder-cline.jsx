import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phu1k1bve.css';
import '../../css/o/opwjgvbcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phu1k1bve"/><path class="opwjgvbcu"/>`,
		"fallback": "material-icon-theme:folder-cline",
	});
}

export default Component;
