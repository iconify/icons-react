import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9mozs6lf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9mozs6lf"/>`,
		"fallback": "pinhead:house-with-chimney",
	});
}

export default Component;
