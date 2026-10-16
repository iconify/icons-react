import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ils33xbkf.css';
import '../../css/m/mv-f1_b6h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ils33xbkf"/><path class="mv-f1_b6h"/>`,
		"fallback": "energy-icons:book-marked-20",
	});
}

export default Component;
