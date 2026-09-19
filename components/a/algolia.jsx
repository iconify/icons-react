import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmx6jvt0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmx6jvt0b"/>`,
		"fallback": "fa6-brands:algolia",
	});
}

export default Component;
