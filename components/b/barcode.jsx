import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gspfgze7k.css';
import '../../css/g/ggozx156l.css';
import '../../css/t/tkf14mthh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="gspfgze7k wm-shadow"/><path class="ggozx156l wm-shadow"/><path class="tkf14mthh"/></g>`,
		"fallback": "withicons-brutal:barcode",
	});
}

export default Component;
