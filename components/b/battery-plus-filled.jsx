import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz3zj39wl.css';
import '../../css/m/m-jnejbbp.css';
import '../../css/f/fdgucpbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz3zj39wl"/><path clip-rule="evenodd" class="m-jnejbbp"/><path class="fdgucpbtj"/>`,
		"fallback": "lucide-extended:battery-plus-filled",
	});
}

export default Component;
