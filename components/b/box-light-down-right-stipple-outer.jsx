import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk9lr3b4z.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk9lr3b4z"/>`,
		"fallback": "memory:box-light-down-right-stipple-outer",
	});
}

export default Component;
