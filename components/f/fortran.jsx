import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puo_-obzc.css';

const viewBox = {"width":473,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puo_-obzc"/>`,
		"fallback": "file-icons:fortran",
	});
}

export default Component;
