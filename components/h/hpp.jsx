import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1qa-m9-r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1qa-m9-r"/>`,
		"fallback": "material-icon-theme:hpp",
	});
}

export default Component;
