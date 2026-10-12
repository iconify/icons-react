import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iu7x-vb2t.css';
import '../../css/s/s9u39fbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iu7x-vb2t"/><path class="s9u39fbem"/></g>`,
		"fallback": "andrsrxn:basketball",
	});
}

export default Component;
