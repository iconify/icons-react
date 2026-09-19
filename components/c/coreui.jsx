import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q02x0dbpu.css';
import '../../css/j/jupl2yb5d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q02x0dbpu"/><path class="jupl2yb5d"/>`,
		"fallback": "cib:coreui",
	});
}

export default Component;
