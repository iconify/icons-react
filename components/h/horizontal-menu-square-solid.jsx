import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fztv_-b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fztv_-b8e"/>`,
		"fallback": "streamline-sharp:horizontal-menu-square-solid",
	});
}

export default Component;
