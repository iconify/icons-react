import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_iuvsbma.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_iuvsbma"/>`,
		"fallback": "fa6-solid:anchor-lock",
	});
}

export default Component;
