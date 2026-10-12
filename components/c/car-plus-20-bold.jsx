import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9032gb0e.css';
import '../../css/y/yw5vbabhn.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/k/kkgg5c00l.css';
import '../../css/h/hayl1lfmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9032gb0e"/><path class="yw5vbabhn"/><path class="aqsnv9bnd"/><path class="kkgg5c00l"/><path class="hayl1lfmd"/>`,
		"fallback": "energy-icons:car-plus-20-bold",
	});
}

export default Component;
