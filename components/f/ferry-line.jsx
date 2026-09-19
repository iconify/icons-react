import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0ofe3bdn.css';
import '../../css/o/o8y0g9bld.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 o0ofe3bdn"/><path class="clr-i-outline clr-i-outline-path-2 o8y0g9bld"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:ferry-line",
	});
}

export default Component;
