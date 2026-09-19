import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2nq22b8d.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2nq22b8d"/>`,
		"fallback": "el:eye-close",
	});
}

export default Component;
