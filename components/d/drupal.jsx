import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnk1wbbpm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnk1wbbpm"/>`,
		"fallback": "selfhst:drupal",
	});
}

export default Component;
