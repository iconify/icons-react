import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1t7v_btd.css';
import '../../css/j/jhru-hx-c.css';
import '../../css/v/vw_n11rmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1t7v_btd"/><path class="jhru-hx-c"/><path class="vw_n11rmf"/>`,
		"fallback": "energy-icons:file-lock-20-bold",
	});
}

export default Component;
