import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xex6rhb7e.css';
import '../../css/v/vi-jvfkhx.css';
import '../../css/g/gtm-d4bag.css';
import '../../css/b/b2tz_eb6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xex6rhb7e"/><path class="vi-jvfkhx"/><path class="gtm-d4bag"/><path class="b2tz_eb6x"/>`,
		"fallback": "solar:chart-2-bold",
	});
}

export default Component;
