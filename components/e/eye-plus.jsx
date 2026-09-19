import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eziq8xbrj.css';
import '../../css/s/sb7vsacsn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eziq8xbrj"/><path class="sb7vsacsn"/>`,
		"fallback": "icomoon-free:eye-plus",
	});
}

export default Component;
