import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd3reeydg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd3reeydg"/>`,
		"fallback": "fa6-solid:circle-arrow-left",
	});
}

export default Component;
