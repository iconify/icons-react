import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpbvj0b9n.css';
import '../../css/n/neukm1fuz.css';
import '../../css/k/kr2jicboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="xpbvj0b9n"/><rect class="neukm1fuz"/><rect class="kr2jicboj"/>`,
		"fallback": "boxicons:grid-column-right-filled",
	});
}

export default Component;
