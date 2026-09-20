import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7ifg30ep.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7ifg30ep"/>`,
		"fallback": "lineicons:arrow-top-left",
	});
}

export default Component;
