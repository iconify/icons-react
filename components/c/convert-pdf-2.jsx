import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8ne5bsn.css';
import '../../css/v/vp5lb0bdv.css';
import '../../css/o/o52aombxi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="om8ne5bsn"/><path class="vp5lb0bdv"/><path class="o52aombxi"/></g>`,
		"fallback": "streamline-color:convert-pdf-2",
	});
}

export default Component;
