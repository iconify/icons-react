import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gt-j1ktag.css';
import '../../css/p/pwbhv0x_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gt-j1ktag"/><path class="pwbhv0x_r"/></g>`,
		"fallback": "tabler:corner-up-left-double",
	});
}

export default Component;
