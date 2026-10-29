import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agoa3uq1m.css';
import '../../css/n/ng58zjenw.css';
import '../../css/n/n398mccnz.css';
import '../../css/g/ghrq4tbrg.css';
import '../../css/j/j9xyh0qrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="agoa3uq1m wm-k"/><path class="ng58zjenw wm-k"/><path class="n398mccnz wm-k"/><path class="ghrq4tbrg wm-shine"/><path class="j9xyh0qrv wm-deco"/></g>`,
		"fallback": "withicons-anime:egg",
	});
}

export default Component;
