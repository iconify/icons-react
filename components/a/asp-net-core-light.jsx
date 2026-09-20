import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r31wnti5m.css';
import '../../css/i/i5za_y8px.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r31wnti5m"/><path class="i5za_y8px"/>`,
		"fallback": "selfhst:asp-net-core-light",
	});
}

export default Component;
