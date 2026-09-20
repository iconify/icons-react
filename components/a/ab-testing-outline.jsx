import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlxs1tz2y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlxs1tz2y"/>`,
		"fallback": "teenyicons:ab-testing-outline",
	});
}

export default Component;
