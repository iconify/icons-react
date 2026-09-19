import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei2152blg.css';

const viewBox = {"width":372,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei2152blg"/>`,
		"fallback": "file-icons:augeas",
	});
}

export default Component;
