import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7o3anbvb.css';
import '../../css/m/mgn5404zj.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7o3anbvb"/><path class="mgn5404zj"/>`,
		"fallback": "medical-icon:i-dermatology",
	});
}

export default Component;
