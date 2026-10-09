import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlqdhacda.css';
import '../../css/o/ojpm0hbkb.css';
import '../../css/p/p7necabgv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xlqdhacda"/><path class="ojpm0hbkb"/><path class="p7necabgv"/>`,
		"fallback": "energy-icons:garage-20-bold",
	});
}

export default Component;
