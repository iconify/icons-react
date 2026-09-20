import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tlkwrnzaq.css';
import '../../css/e/ei2vo2bhj.css';
import '../../css/y/y4yl_dbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tlkwrnzaq"/><path class="ei2vo2bhj"/><path class="y4yl_dbyd"/></g>`,
		"fallback": "streamline-freehand:database-connection",
	});
}

export default Component;
