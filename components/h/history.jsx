import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w4x4tnb7k.css';
import '../../css/y/y2k06os-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w4x4tnb7k"/><path class="y2k06os-r"/></g>`,
		"fallback": "tabler:history",
	});
}

export default Component;
