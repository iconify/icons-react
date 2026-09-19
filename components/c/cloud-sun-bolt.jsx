import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft4m3528r.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft4m3528r"/>`,
		"fallback": "f7:cloud-sun-bolt",
	});
}

export default Component;
