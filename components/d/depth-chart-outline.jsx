import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui3ma-bbi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui3ma-bbi"/>`,
		"fallback": "teenyicons:depth-chart-outline",
	});
}

export default Component;
