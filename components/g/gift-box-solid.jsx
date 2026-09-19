import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om__czbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om__czbag"/>`,
		"fallback": "flowbite:gift-box-solid",
	});
}

export default Component;
