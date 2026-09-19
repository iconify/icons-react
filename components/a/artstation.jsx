import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svb-z_tut.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svb-z_tut"/>`,
		"fallback": "cib:artstation",
	});
}

export default Component;
