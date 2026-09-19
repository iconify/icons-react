import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx-bmy_tr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx-bmy_tr"/>`,
		"fallback": "fa6-solid:angles-up",
	});
}

export default Component;
