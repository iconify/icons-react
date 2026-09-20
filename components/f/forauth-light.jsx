import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz8y_cqlg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz8y_cqlg"/>`,
		"fallback": "selfhst:forauth-light",
	});
}

export default Component;
