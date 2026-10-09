import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl_of99ub.css';
import '../../css/a/a81jttbcu.css';
import '../../css/l/lh_ofmq9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl_of99ub"/><path class="a81jttbcu"/><path class="lh_ofmq9u"/>`,
		"fallback": "energy-icons:export-limit-48-bold",
	});
}

export default Component;
