import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1qu1v53u.css';
import '../../css/u/u9c-71bvi.css';
import '../../css/v/vw_n11rmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1qu1v53u"/><path class="u9c-71bvi"/><path class="vw_n11rmf"/>`,
		"fallback": "energy-icons:folder-lock-20-bold",
	});
}

export default Component;
