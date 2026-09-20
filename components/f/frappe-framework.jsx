import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v73ackb9u.css';
import '../../css/u/uwl1pssco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v73ackb9u"/><path class="uwl1pssco"/>`,
		"fallback": "selfhst:frappe-framework",
	});
}

export default Component;
