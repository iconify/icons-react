import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sac5dbcfu.css';
import '../../css/x/x998yob3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sac5dbcfu"/><path class="x998yob3x"/></g>`,
		"fallback": "streamline-ultimate-color:data-transfer-vertical",
	});
}

export default Component;
