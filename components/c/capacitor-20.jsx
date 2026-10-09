import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_wwqhb6k.css';
import '../../css/s/sd5b7gblq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_wwqhb6k"/><path class="sd5b7gblq"/>`,
		"fallback": "energy-icons:capacitor-20",
	});
}

export default Component;
