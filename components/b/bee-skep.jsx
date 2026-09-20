import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwdo5clsg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwdo5clsg"/>`,
		"fallback": "pinhead:bee-skep",
	});
}

export default Component;
