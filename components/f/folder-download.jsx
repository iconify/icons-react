import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/teq8_fbrn.css';
import '../../css/q/q95iz9qza.css';
import '../../css/e/eek3jy32c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="teq8_fbrn"/><path class="q95iz9qza"/><path class="eek3jy32c"/></g>`,
		"fallback": "andrsrxn:folder-download",
	});
}

export default Component;
