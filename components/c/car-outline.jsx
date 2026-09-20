import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvf6hzvqw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvf6hzvqw"/>`,
		"fallback": "teenyicons:car-outline",
	});
}

export default Component;
