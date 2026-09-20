import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaqgtyjjh.css';
import '../../css/s/sthll3b2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaqgtyjjh"/><path class="sthll3b2o"/>`,
		"fallback": "selfhst:autocaliweb",
	});
}

export default Component;
