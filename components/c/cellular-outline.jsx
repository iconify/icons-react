import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzkebvbwp.css';
import '../../css/h/h3qchvbhn.css';
import '../../css/u/uw1uypbnt.css';
import '../../css/o/o9dpakbzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="uzkebvbwp"/><rect class="h3qchvbhn"/><rect class="uw1uypbnt"/><rect class="o9dpakbzr"/>`,
		"fallback": "famicons:cellular-outline",
	});
}

export default Component;
