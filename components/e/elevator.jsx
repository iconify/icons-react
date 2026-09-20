import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/om4lxwbcu.css';
import '../../css/y/ytpdaq60h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="om4lxwbcu"/><path class="ytpdaq60h"/></g>`,
		"fallback": "tabler:elevator",
	});
}

export default Component;
