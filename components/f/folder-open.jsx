import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhvb16bsm.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhvb16bsm"/>`,
		"fallback": "fa6-solid:folder-open",
	});
}

export default Component;
