import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e87ae9b4o.css';
import '../../css/z/zyhrf5vhp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e87ae9b4o"/><path class="zyhrf5vhp"/>`,
		"fallback": "selfhst:1panel-light",
	});
}

export default Component;
