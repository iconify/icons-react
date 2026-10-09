import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0d-k9bod.css';
import '../../css/i/iuszqrjvz.css';
import '../../css/o/oyn2j5rbc.css';
import '../../css/w/wlnmmrb-d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0d-k9bod"/><path class="iuszqrjvz"/><path class="oyn2j5rbc"/><path class="wlnmmrb-d"/>`,
		"fallback": "energy-icons:house-x-20",
	});
}

export default Component;
