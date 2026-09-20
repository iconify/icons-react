import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py2qzq0bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py2qzq0bv"/>`,
		"fallback": "simple-icons:discourse",
	});
}

export default Component;
