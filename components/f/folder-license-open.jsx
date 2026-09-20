import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsijkbbus.css';
import '../../css/r/rd09_mylf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsijkbbus"/><path class="rd09_mylf"/>`,
		"fallback": "material-icon-theme:folder-license-open",
	});
}

export default Component;
