import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbv_j9a6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbv_j9a6b"/>`,
		"fallback": "simple-icons:eljueves",
	});
}

export default Component;
