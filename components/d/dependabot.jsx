import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgnn4eb5r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgnn4eb5r"/>`,
		"fallback": "material-icon-theme:dependabot",
	});
}

export default Component;
