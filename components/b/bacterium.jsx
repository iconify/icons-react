import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqlnota6c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqlnota6c"/>`,
		"fallback": "fa-solid:bacterium",
	});
}

export default Component;
