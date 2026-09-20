import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aub9hz98j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aub9hz98j"/>`,
		"fallback": "teenyicons:bold-outline",
	});
}

export default Component;
