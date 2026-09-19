import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5ss79pzi.css';
import '../../css/z/znsgree8n.css';
import '../../css/x/xceiv6bnm.css';
import '../../css/y/y00xw2byu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5ss79pzi"/><path class="znsgree8n"/><path clip-rule="evenodd" class="xceiv6bnm"/><path class="y00xw2byu"/></g>`,
		"fallback": "icon-park-outline:circle-four-line",
	});
}

export default Component;
