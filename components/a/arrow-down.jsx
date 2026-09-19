import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n860kys_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n860kys_f"/>`,
		"fallback": "griddy-icons:arrow-down",
	});
}

export default Component;
