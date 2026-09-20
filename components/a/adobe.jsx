import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggb5l7bzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggb5l7bzh"/>`,
		"fallback": "selfhst:adobe",
	});
}

export default Component;
