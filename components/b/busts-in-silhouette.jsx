import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4oym9cew.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4oym9cew"/>`,
		"fallback": "fluent-emoji-high-contrast:busts-in-silhouette",
	});
}

export default Component;
