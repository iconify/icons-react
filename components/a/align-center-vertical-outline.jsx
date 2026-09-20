import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8y38_bsr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8y38_bsr"/>`,
		"fallback": "teenyicons:align-center-vertical-outline",
	});
}

export default Component;
