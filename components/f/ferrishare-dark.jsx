import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1iycg2ku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1iycg2ku"/>`,
		"fallback": "selfhst:ferrishare-dark",
	});
}

export default Component;
