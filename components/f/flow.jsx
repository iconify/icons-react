import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erq5l0bdy.css';

const viewBox = {"width":300,"height":300};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erq5l0bdy"/>`,
		"fallback": "material-icon-theme:flow",
	});
}

export default Component;
