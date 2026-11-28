import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfy5p04_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfy5p04_o"/>`,
		"fallback": "noviair-light:bot",
	});
}

export default Component;
