import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlop-v64y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlop-v64y"/>`,
		"fallback": "selfhst:contao-dark",
	});
}

export default Component;
