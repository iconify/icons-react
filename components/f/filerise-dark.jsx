import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l30n8pb6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l30n8pb6b"/>`,
		"fallback": "selfhst:filerise-dark",
	});
}

export default Component;
