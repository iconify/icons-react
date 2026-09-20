import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8ne5bsn.css';
import '../../css/v/vp5lb0bdv.css';
import '../../css/j/jwiuk_c_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="om8ne5bsn"/><path class="vp5lb0bdv"/><path class="jwiuk_c_f"/></g>`,
		"fallback": "streamline-color:file-code-1",
	});
}

export default Component;
