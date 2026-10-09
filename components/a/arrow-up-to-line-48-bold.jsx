import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-29nt30n.css';
import '../../css/s/sj5ux4q1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-29nt30n"/><path class="sj5ux4q1a"/>`,
		"fallback": "energy-icons:arrow-up-to-line-48-bold",
	});
}

export default Component;
