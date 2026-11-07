import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vgnv5k5we.css';
import '../../css/e/e2iqnjbvb.css';
import '../../css/e/er0v85b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="vgnv5k5we"/><path class="e2iqnjbvb"/></g><path class="er0v85b1x"/>`,
		"fallback": "solar:figma-bold-duotone",
	});
}

export default Component;
