import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk64cac5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk64cac5r"/>`,
		"fallback": "tabler:gender-male",
	});
}

export default Component;
