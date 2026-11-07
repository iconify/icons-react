import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/t/tsddqxbdo.css';
import '../../css/k/k7u1xrbtl.css';
import '../../css/h/hj2yjwnmt.css';
import '../../css/h/h85y5vu-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="tsddqxbdo"/><path class="k7u1xrbtl"/></g><path class="hj2yjwnmt"/><path class="h85y5vu-x"/>`,
		"fallback": "solar:balloon-bold-duotone",
	});
}

export default Component;
