import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awsq1zbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="awsq1zbxp"/>`,
		"fallback": "keyline-icons:bot-2-sharp-fill",
	});
}

export default Component;
