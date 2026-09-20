import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9a0a3bkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9a0a3bkv"/>`,
		"fallback": "selfhst:eziwiki-light",
	});
}

export default Component;
