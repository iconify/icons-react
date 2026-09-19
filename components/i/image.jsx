import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z5e2eg6_z.css';
import '../../css/w/wc7nz197r.css';
import '../../css/y/y3pflbcoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z5e2eg6_z"/><circle class="wc7nz197r"/><path class="y3pflbcoz"/></g>`,
		"fallback": "akar-icons:image",
	});
}

export default Component;
