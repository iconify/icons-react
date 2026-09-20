import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0jif6b6i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0jif6b6i"/>`,
		"fallback": "teenyicons:align-top-outline",
	});
}

export default Component;
