import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvbo4bbuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvbo4bbuj"/>`,
		"fallback": "heroicons:cake-solid",
	});
}

export default Component;
