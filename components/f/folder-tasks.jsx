import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cjc0bct.css';
import '../../css/c/cr1evbbps.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cjc0bct"/><path class="cr1evbbps"/>`,
		"fallback": "material-icon-theme:folder-tasks",
	});
}

export default Component;
