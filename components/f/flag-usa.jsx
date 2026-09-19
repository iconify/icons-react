import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4zlantmw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4zlantmw"/>`,
		"fallback": "fa6-solid:flag-usa",
	});
}

export default Component;
