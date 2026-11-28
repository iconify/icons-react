import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f57b36_hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f57b36_hk"/>`,
		"fallback": "noviair-light:database-minus",
	});
}

export default Component;
