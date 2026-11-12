import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqzvsjbqs.css';
import '../../css/p/p1lsw9_1a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqzvsjbqs"/><path class="p1lsw9_1a"/>`,
		"fallback": "selfhst:bludit",
	});
}

export default Component;
