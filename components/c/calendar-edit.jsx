import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifivxibrp.css';
import '../../css/l/lt949dl7g.css';
import '../../css/s/shwczoibt.css';
import '../../css/t/tcw_5qbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ifivxibrp"/><path class="lt949dl7g"/><rect transform="rotate(-45 31.33 -16.1)scale(1 -1)" class="shwczoibt"/><path class="tcw_5qbdb"/></g>`,
		"fallback": "andrsrxn:calendar-edit",
	});
}

export default Component;
