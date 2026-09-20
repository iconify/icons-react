import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2od65-nu.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2od65-nu"/>`,
		"fallback": "maki:airport-11",
	});
}

export default Component;
