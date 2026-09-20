import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiynznd9r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiynznd9r"/>`,
		"fallback": "picon:heart",
	});
}

export default Component;
