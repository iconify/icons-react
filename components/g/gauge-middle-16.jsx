import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9lwlibmh.css';
import '../../css/m/mocmm6bno.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9lwlibmh"/><path class="mocmm6bno"/>`,
		"fallback": "qlementine-icons:gauge-middle-16",
	});
}

export default Component;
