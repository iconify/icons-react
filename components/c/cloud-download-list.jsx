import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-v6niwrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m-v6niwrr"/>`,
		"fallback": "ix:cloud-download-list",
	});
}

export default Component;
