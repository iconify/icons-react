import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuelrk4mg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuelrk4mg"/>`,
		"fallback": "material-icon-theme:assembly",
	});
}

export default Component;
