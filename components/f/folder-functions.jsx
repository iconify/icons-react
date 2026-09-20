import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhg495fle.css';
import '../../css/f/fe4dh4b3a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhg495fle"/><path class="fe4dh4b3a"/>`,
		"fallback": "material-icon-theme:folder-functions",
	});
}

export default Component;
