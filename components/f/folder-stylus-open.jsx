import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0c1nwb0d.css';
import '../../css/e/eu1xw2b6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0c1nwb0d"/><path class="eu1xw2b6r"/>`,
		"fallback": "material-icon-theme:folder-stylus-open",
	});
}

export default Component;
