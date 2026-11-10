import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh10fn02x.css';
import '../../css/r/r55yw4uyl.css';
import '../../css/i/iu4wvzb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oh10fn02x"/><path class="r55yw4uyl"/><path class="iu4wvzb4t"/></g>`,
		"fallback": "andrsrxn:battery-charging",
	});
}

export default Component;
