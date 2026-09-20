import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvm0bpva.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgvm0bpva"/>`,
		"fallback": "la:gratipay",
	});
}

export default Component;
