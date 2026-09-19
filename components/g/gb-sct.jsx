import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unxc20bif.css';
import '../../css/l/l2oeafz9p.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unxc20bif"/><path clip-rule="evenodd" class="l2oeafz9p"/></g>`,
		"fallback": "flagpack:gb-sct",
	});
}

export default Component;
