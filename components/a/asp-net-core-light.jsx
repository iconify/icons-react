import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r31wnti5m.css';
import '../../css/d/d_4d0bbhy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r31wnti5m"/><path class="d_4d0bbhy"/>`,
		"fallback": "selfhst:asp-net-core-light",
	});
}

export default Component;
