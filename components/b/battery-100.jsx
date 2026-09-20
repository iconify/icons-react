import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdr_fsbbb.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdr_fsbbb"/>`,
		"fallback": "memory:battery-100",
	});
}

export default Component;
