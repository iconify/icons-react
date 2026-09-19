import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3z343zim.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3z343zim"/>`,
		"fallback": "fa6-solid:f",
	});
}

export default Component;
