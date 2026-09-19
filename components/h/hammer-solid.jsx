import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzj9qebqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzj9qebqd"/>`,
		"fallback": "flowbite:hammer-solid",
	});
}

export default Component;
