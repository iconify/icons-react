import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf19ixb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf19ixb5n"/>`,
		"fallback": "boxicons:bookmark-alt",
	});
}

export default Component;
