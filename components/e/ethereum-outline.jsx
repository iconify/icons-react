import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1dy8tbco.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1dy8tbco"/>`,
		"fallback": "teenyicons:ethereum-outline",
	});
}

export default Component;
