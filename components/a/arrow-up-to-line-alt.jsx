import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfex-sbdr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfex-sbdr"/>`,
		"fallback": "f7:arrow-up-to-line-alt",
	});
}

export default Component;
