import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-2e2xgge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-2e2xgge"/>`,
		"fallback": "selfhst:anki-light",
	});
}

export default Component;
