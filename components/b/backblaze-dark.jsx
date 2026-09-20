import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw9z6cbod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw9z6cbod"/>`,
		"fallback": "selfhst:backblaze-dark",
	});
}

export default Component;
