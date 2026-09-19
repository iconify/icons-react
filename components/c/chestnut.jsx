import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhz5i4bfl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhz5i4bfl"/>`,
		"fallback": "dinkie-icons:chestnut",
	});
}

export default Component;
