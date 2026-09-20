import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oegqqvbgf.css';
import '../../css/d/di6z7bc9c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oegqqvbgf"/><path class="di6z7bc9c"/>`,
		"fallback": "teenyicons:globe-solid",
	});
}

export default Component;
