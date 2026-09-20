import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l32lerbfx.css';
import '../../css/o/opwjgvbcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l32lerbfx"/><path class="opwjgvbcu"/>`,
		"fallback": "material-icon-theme:folder-cline-open",
	});
}

export default Component;
