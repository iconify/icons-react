import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovop27obc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovop27obc"/>`,
		"fallback": "f7:cloud-sleet",
	});
}

export default Component;
