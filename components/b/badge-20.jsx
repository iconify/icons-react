import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5dz5-btu.css';
import '../../css/e/e8z4a313a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5dz5-btu"/><path class="e8z4a313a"/>`,
		"fallback": "energy-icons:badge-20",
	});
}

export default Component;
