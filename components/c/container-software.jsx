import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw59wdbrq.css';
import '../../css/e/eyc11k90x.css';
import '../../css/k/kp_ro9o2o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw59wdbrq"/><path class="eyc11k90x"/><path class="kp_ro9o2o"/>`,
		"fallback": "carbon:container-software",
	});
}

export default Component;
