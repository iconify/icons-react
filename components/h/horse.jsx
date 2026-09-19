import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj32j_biu.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj32j_biu"/>`,
		"fallback": "fa-solid:horse",
	});
}

export default Component;
