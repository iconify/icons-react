import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs_dfacjm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs_dfacjm"/>`,
		"fallback": "garden:headset-fill-20",
	});
}

export default Component;
