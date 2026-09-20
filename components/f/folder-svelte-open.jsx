import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsijkbbus.css';
import '../../css/a/ads0gkbbv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsijkbbus"/><path class="ads0gkbbv"/>`,
		"fallback": "material-icon-theme:folder-svelte-open",
	});
}

export default Component;
