import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlpmhkb0y.css';
import '../../css/a/arjp9mitp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlpmhkb0y"/><path class="arjp9mitp"/>`,
		"fallback": "fxemoji:hands",
	});
}

export default Component;
