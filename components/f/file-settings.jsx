import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f8fh8m_mm.css';
import '../../css/n/n4xt3eb6h.css';
import '../../css/h/hrcfinwcf.css';
import '../../css/n/nlgevhjxn.css';
import '../../css/z/z94k-_m9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f8fh8m_mm"/><path class="n4xt3eb6h"/><path class="hrcfinwcf"/><circle class="nlgevhjxn"/><path class="z94k-_m9p"/></g>`,
		"fallback": "andrsrxn:file-settings",
	});
}

export default Component;
