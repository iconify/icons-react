import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6_s1zkbf.css';
import '../../css/l/l8i64_wsn.css';
import '../../css/r/r41ol3t2y.css';
import '../../css/s/sxqz2irrj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6_s1zkbf"/><path class="l8i64_wsn"/><path class="r41ol3t2y"/><path class="sxqz2irrj"/>`,
		"fallback": "energy-icons:hazard-environment-20",
	});
}

export default Component;
