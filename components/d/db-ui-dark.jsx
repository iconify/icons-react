import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a98mh80fl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a98mh80fl"/>`,
		"fallback": "selfhst:db-ui-dark",
	});
}

export default Component;
