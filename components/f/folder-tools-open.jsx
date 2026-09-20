import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haf1n5bdl.css';
import '../../css/r/ryg6a4aqs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haf1n5bdl"/><path class="ryg6a4aqs"/>`,
		"fallback": "material-icon-theme:folder-tools-open",
	});
}

export default Component;
