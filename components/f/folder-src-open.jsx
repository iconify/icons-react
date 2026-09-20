import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pffnfbbjn.css';
import '../../css/e/ejvzpugwb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pffnfbbjn"/><path class="ejvzpugwb"/>`,
		"fallback": "material-icon-theme:folder-src-open",
	});
}

export default Component;
