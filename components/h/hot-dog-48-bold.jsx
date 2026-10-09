import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcwpqig4o.css';
import '../../css/k/kqa6_mmwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcwpqig4o"/><path class="kqa6_mmwl"/>`,
		"fallback": "energy-icons:hot-dog-48-bold",
	});
}

export default Component;
