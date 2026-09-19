import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq4o_fgkp.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq4o_fgkp"/>`,
		"fallback": "fa6-solid:arrows-left-right-to-line",
	});
}

export default Component;
