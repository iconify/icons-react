import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxyl2pbba.css';
import '../../css/m/m-7so2bbd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxyl2pbba"/><path class="m-7so2bbd"/>`,
		"fallback": "maki:car-rental-15",
	});
}

export default Component;
