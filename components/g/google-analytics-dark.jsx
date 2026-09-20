import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meazp9b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meazp9b9o"/>`,
		"fallback": "selfhst:google-analytics-dark",
	});
}

export default Component;
