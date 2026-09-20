import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flg1mtbtz.css';
import '../../css/o/obd1zrb6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flg1mtbtz"/><path class="obd1zrb6n"/></g>`,
		"fallback": "streamline-color:closet",
	});
}

export default Component;
