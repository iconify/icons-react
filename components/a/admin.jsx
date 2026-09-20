import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2wv6_umn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z2wv6_umn"/>`,
		"fallback": "pajamas:admin",
	});
}

export default Component;
