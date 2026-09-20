import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aprx8ebqb.css';
import '../../css/i/i3h3u4txt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aprx8ebqb"/><path class="i3h3u4txt"/>`,
		"fallback": "material-icon-theme:folder-helm-open",
	});
}

export default Component;
