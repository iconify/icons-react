import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqeckf5cb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqeckf5cb"/>`,
		"fallback": "fa6-brands:files-pinwheel",
	});
}

export default Component;
