import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hccjpqwdn.css';
import '../../css/s/sgpjj4b1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hccjpqwdn"/><path class="sgpjj4b1a"/>`,
		"fallback": "selfhst:dynamodb-dashboard-dark",
	});
}

export default Component;
