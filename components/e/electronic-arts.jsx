import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq-yft7qu.css';

const viewBox = {"width":2225,"height":399};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zq-yft7qu"/>`,
		"fallback": "thesvg-color:electronic-arts",
	});
}

export default Component;
