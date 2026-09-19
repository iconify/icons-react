import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eltjcd_fu.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eltjcd_fu"/>`,
		"fallback": "fa6-solid:hippo",
	});
}

export default Component;
