import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biz38_b-x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biz38_b-x"/>`,
		"fallback": "selfhst:cyberhaven-light",
	});
}

export default Component;
