import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2wh_732m.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2wh_732m"/>`,
		"fallback": "f7:capsule",
	});
}

export default Component;
