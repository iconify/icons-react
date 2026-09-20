import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwvk9yb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwvk9yb0o"/>`,
		"fallback": "mdi-light:arrow-right-circle",
	});
}

export default Component;
