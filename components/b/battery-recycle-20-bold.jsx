import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwtuwobgt.css';
import '../../css/n/n6oa-n9kh.css';
import '../../css/a/azbjuwumn.css';
import '../../css/a/at4icdc8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwtuwobgt"/><path class="n6oa-n9kh"/><path class="azbjuwumn"/><path class="at4icdc8p"/>`,
		"fallback": "energy-icons:battery-recycle-20-bold",
	});
}

export default Component;
