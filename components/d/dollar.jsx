import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq--4rb2u.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq--4rb2u"/>`,
		"fallback": "lineicons:dollar",
	});
}

export default Component;
