import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc1rljbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc1rljbgz"/>`,
		"fallback": "noviair-light:cloud-drizzle",
	});
}

export default Component;
