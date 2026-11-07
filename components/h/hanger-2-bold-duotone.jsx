import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1omc9nvs.css';
import '../../css/u/unld3absx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1omc9nvs"/><path class="unld3absx"/>`,
		"fallback": "solar:hanger-2-bold-duotone",
	});
}

export default Component;
