import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbmlz2beh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbmlz2beh"/>`,
		"fallback": "healthicons:chart-cured-decreasing-24px",
	});
}

export default Component;
