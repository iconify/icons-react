import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/remi148dy.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/hwsal5q-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="remi148dy"/><circle class="h_tsn8bxt"/><circle class="hwsal5q-o"/></g>`,
		"fallback": "lucide:cog",
	});
}

export default Component;
