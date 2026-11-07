import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmikg89ie.css';
import '../../css/o/or2xuacjy.css';
import '../../css/x/xh85adb6m.css';
import '../../css/i/idawvwsbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dmikg89ie"/><path class="or2xuacjy"/><path class="xh85adb6m"/><path class="idawvwsbm"/>`,
		"fallback": "solar:electric-refueling-bold-duotone",
	});
}

export default Component;
