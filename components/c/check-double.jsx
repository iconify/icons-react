import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz16-yb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz16-yb9i"/>`,
		"fallback": "griddy-icons:check-double",
	});
}

export default Component;
