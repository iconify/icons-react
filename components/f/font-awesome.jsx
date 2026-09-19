import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrv2rcjel.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrv2rcjel"/>`,
		"fallback": "fa-brands:font-awesome",
	});
}

export default Component;
