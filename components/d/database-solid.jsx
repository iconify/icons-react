import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klk2onb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klk2onb0h"/>`,
		"fallback": "iconaut:database-solid",
	});
}

export default Component;
