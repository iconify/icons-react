import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dypv3-mdc.css';
import '../../css/e/e4c-z3b2y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dypv3-mdc"/><path class="e4c-z3b2y"/>`,
		"fallback": "material-icon-theme:folder-gh-workflows",
	});
}

export default Component;
