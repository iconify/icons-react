import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awy5dwb7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awy5dwb7w"/>`,
		"fallback": "selfhst:directus-dark",
	});
}

export default Component;
