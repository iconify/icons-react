import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceq48ugul.css';
import '../../css/k/kw7672rxx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceq48ugul"/><path class="kw7672rxx"/>`,
		"fallback": "energy-icons:frog-20",
	});
}

export default Component;
