import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gklh-gfbx.css';
import '../../css/w/wt2sl3biy.css';
import '../../css/q/q0mjolbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gklh-gfbx"/><path class="wt2sl3biy"/><path clip-rule="evenodd" class="q0mjolbzu"/></g>`,
		"fallback": "keyline-icons:hard-drive-duotone",
	});
}

export default Component;
