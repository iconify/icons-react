import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1mcems0k.css';
import '../../css/y/ydsujbbpq.css';
import '../../css/r/r86n_3b9c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1mcems0k"/><path class="ydsujbbpq"/><path class="r86n_3b9c"/>`,
		"fallback": "energy-icons:house-sun-20-bold",
	});
}

export default Component;
