import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdp-0be3d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdp-0be3d"/>`,
		"fallback": "dinkie-icons:dagger-knife",
	});
}

export default Component;
