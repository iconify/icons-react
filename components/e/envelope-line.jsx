import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gee90jjrp.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 gee90jjrp"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:envelope-line",
	});
}

export default Component;
