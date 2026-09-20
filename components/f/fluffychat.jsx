import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ahb8bdh.css';
import '../../css/j/jsgezyb9h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ahb8bdh"/><path class="jsgezyb9h"/>`,
		"fallback": "selfhst:fluffychat",
	});
}

export default Component;
