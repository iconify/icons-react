import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrp2xebmc.css';
import '../../css/g/gx35_lbkf.css';
import '../../css/i/iof5qqbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jrp2xebmc"/><path class="gx35_lbkf"/><path class="iof5qqbyo"/></g>`,
		"fallback": "lucide-extended:ban-duotone",
	});
}

export default Component;
