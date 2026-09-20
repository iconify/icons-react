import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oum74s82r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oum74s82r"/>`,
		"fallback": "keyline-icons:eye-off",
	});
}

export default Component;
