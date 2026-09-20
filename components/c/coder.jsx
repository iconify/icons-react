import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg2tnebcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg2tnebcx"/>`,
		"fallback": "selfhst:coder",
	});
}

export default Component;
