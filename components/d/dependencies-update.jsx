import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9y0o2b-z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9y0o2b-z"/>`,
		"fallback": "material-icon-theme:dependencies-update",
	});
}

export default Component;
