import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbv6d6uqd.css';
import '../../css/u/u27wnzbvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kbv6d6uqd"/><path class="u27wnzbvk"/>`,
		"fallback": "qlementine-icons:hi-hat-24",
	});
}

export default Component;
