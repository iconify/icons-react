import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxj-05m9f.css';
import '../../css/w/wafsj8bhi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxj-05m9f"/><path class="wafsj8bhi"/>`,
		"fallback": "energy-icons:electrolyser-48-bold",
	});
}

export default Component;
