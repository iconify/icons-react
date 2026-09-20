import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqw06qb2h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqw06qb2h"/>`,
		"fallback": "teenyicons:area-chart-alt-outline",
	});
}

export default Component;
