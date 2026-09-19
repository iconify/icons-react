import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aavtj7m5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aavtj7m5o"/>`,
		"fallback": "griddy-icons:certificate",
	});
}

export default Component;
