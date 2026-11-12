import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxo_cab5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxo_cab5c"/>`,
		"fallback": "selfhst:hollo-dark",
	});
}

export default Component;
