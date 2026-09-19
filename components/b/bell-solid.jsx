import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odcfwjbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odcfwjbjy"/>`,
		"fallback": "flowbite:bell-solid",
	});
}

export default Component;
