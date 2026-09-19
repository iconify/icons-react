import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn7h90e6l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn7h90e6l"/>`,
		"fallback": "fa-solid:cloud-download-alt",
	});
}

export default Component;
