import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ueukte7_g.css';
import '../../css/i/i3gtwv6im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ueukte7_g"/><path class="i3gtwv6im"/></g>`,
		"fallback": "lucide:box",
	});
}

export default Component;
