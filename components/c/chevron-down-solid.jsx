import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usurg9b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usurg9b8h"/>`,
		"fallback": "pixel:chevron-down-solid",
	});
}

export default Component;
