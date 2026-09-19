import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue2su8odp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue2su8odp"/>`,
		"fallback": "bi:bell",
	});
}

export default Component;
