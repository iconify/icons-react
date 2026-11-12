import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlzd5tbnp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlzd5tbnp"/>`,
		"fallback": "selfhst:antora-light",
	});
}

export default Component;
