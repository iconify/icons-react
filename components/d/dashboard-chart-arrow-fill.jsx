import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfeabx60c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfeabx60c"/>`,
		"fallback": "mage:dashboard-chart-arrow-fill",
	});
}

export default Component;
