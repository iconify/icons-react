import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5evchskr.css';
import '../../css/q/qa0jhaboz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5evchskr"/><path class="qa0jhaboz"/>`,
		"fallback": "material-icon-theme:folder-utils",
	});
}

export default Component;
