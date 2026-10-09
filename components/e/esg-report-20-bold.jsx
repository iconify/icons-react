import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny-w6qbwa.css';
import '../../css/m/m8tnmwbcg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny-w6qbwa"/><path class="m8tnmwbcg"/>`,
		"fallback": "energy-icons:esg-report-20-bold",
	});
}

export default Component;
