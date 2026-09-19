import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8y89f8sp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8y89f8sp"/>`,
		"fallback": "grommet-icons:anchor",
	});
}

export default Component;
