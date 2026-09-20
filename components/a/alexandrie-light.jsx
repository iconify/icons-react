import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxbl3ccvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxbl3ccvm"/>`,
		"fallback": "selfhst:alexandrie-light",
	});
}

export default Component;
