import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqtu52b6d.css';
import '../../css/k/k0ztijb-p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqtu52b6d"/><path class="k0ztijb-p"/>`,
		"fallback": "energy-icons:heat-island-20",
	});
}

export default Component;
