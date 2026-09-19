import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm0apjj5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xm0apjj5f"/>`,
		"fallback": "griddy-icons:dental-floss",
	});
}

export default Component;
