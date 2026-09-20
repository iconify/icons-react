import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyw18zbdk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyw18zbdk"/>`,
		"fallback": "material-icon-theme:http",
	});
}

export default Component;
