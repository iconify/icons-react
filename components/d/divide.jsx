import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk8_5zbsg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk8_5zbsg"/>`,
		"fallback": "fa6-solid:divide",
	});
}

export default Component;
