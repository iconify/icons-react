import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk30anbcf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk30anbcf"/>`,
		"fallback": "fa6-solid:address-card",
	});
}

export default Component;
