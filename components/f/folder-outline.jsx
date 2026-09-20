import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxohb6bes.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxohb6bes"/>`,
		"fallback": "lsicon:folder-outline",
	});
}

export default Component;
