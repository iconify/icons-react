import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocy1dtl3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocy1dtl3n"/>`,
		"fallback": "iconamoon:arrow-right-3-square-light",
	});
}

export default Component;
