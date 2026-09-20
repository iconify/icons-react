import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn_3n2bac.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn_3n2bac"/>`,
		"fallback": "selfhst:hitkeep",
	});
}

export default Component;
