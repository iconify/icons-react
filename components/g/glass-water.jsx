import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh6orpnrp.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh6orpnrp"/>`,
		"fallback": "fa6-solid:glass-water",
	});
}

export default Component;
