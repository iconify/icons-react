import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0j8rpbup.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0j8rpbup"/>`,
		"fallback": "pinhead:brick-wall-with-battlement",
	});
}

export default Component;
