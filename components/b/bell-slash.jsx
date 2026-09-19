import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os_axgurn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os_axgurn"/>`,
		"fallback": "boxicons:bell-slash",
	});
}

export default Component;
