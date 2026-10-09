import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mcems0k.css';
import '../../css/t/t_bk3zflf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mcems0k"/><path class="t_bk3zflf"/>`,
		"fallback": "energy-icons:insulation-20-bold",
	});
}

export default Component;
