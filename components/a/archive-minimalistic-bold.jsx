import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgelptg3x.css';
import '../../css/n/n3pz-6bxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kgelptg3x"/><path class="n3pz-6bxt"/>`,
		"fallback": "solar:archive-minimalistic-bold",
	});
}

export default Component;
