import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcpt3rldn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcpt3rldn"/>`,
		"fallback": "fa6-regular:font-awesome",
	});
}

export default Component;
