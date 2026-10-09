import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlenow6rc.css';
import '../../css/l/l6xz3eb8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlenow6rc"/><path class="l6xz3eb8c"/>`,
		"fallback": "energy-icons:gas-turbine-20",
	});
}

export default Component;
