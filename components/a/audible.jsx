import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl7zszbrg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl7zszbrg"/>`,
		"fallback": "cib:audible",
	});
}

export default Component;
