import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv3hw0rzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv3hw0rzn"/>`,
		"fallback": "boxicons:cloud-alt-2",
	});
}

export default Component;
