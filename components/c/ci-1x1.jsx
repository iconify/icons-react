import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o58hplycf.css';
import '../../css/l/likqribid.css';
import '../../css/h/h22iprnmn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o58hplycf"/><path class="likqribid"/><path class="h22iprnmn"/></g>`,
		"fallback": "flag:ci-1x1",
	});
}

export default Component;
