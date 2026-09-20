import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm644_2yv.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm644_2yv"/>`,
		"fallback": "memory:box-outer-light-up",
	});
}

export default Component;
