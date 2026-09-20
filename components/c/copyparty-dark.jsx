import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxhtq0_0l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxhtq0_0l"/>`,
		"fallback": "selfhst:copyparty-dark",
	});
}

export default Component;
