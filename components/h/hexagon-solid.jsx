import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqjs_6btz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqjs_6btz"/>`,
		"fallback": "teenyicons:hexagon-solid",
	});
}

export default Component;
