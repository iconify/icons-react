import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov-d0q17d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov-d0q17d"/>`,
		"fallback": "flowbite:compress-solid",
	});
}

export default Component;
