import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_f_kcb1a.css';
import '../../css/j/js7r36bge.css';
import '../../css/p/pjegvpb6r.css';
import '../../css/r/rbi3a9cbx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_f_kcb1a"/><path class="js7r36bge"/><path class="pjegvpb6r"/><path class="rbi3a9cbx"/>`,
		"fallback": "energy-icons:grid-queue-20",
	});
}

export default Component;
