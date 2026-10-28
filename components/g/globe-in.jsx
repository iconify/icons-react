import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aoz6irspo.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/v/v4drgo51x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aoz6irspo"/><path class="u5h8llb9a"/><path class="v4drgo51x"/></g>`,
		"fallback": "andrsrxn:globe-in",
	});
}

export default Component;
