import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtl_iywhd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jtl_iywhd"/>`,
		"fallback": "fa7-brands:brave-reverse",
	});
}

export default Component;
