import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cerp1lnii.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cerp1lnii"/>`,
		"fallback": "teenyicons:archive-outline",
	});
}

export default Component;
