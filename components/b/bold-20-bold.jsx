import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eysowxhrp.css';
import '../../css/s/seio_1p-r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eysowxhrp"/><path class="seio_1p-r"/>`,
		"fallback": "energy-icons:bold-20-bold",
	});
}

export default Component;
