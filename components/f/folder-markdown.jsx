import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcjmcxbsc.css';
import '../../css/x/x23a3l-6b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcjmcxbsc"/><path class="x23a3l-6b"/>`,
		"fallback": "material-icon-theme:folder-markdown",
	});
}

export default Component;
