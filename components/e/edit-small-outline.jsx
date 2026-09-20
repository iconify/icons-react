import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6rvq-b2i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6rvq-b2i"/>`,
		"fallback": "teenyicons:edit-small-outline",
	});
}

export default Component;
