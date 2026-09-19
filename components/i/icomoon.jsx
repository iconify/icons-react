import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv_hd5bjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv_hd5bjj"/>`,
		"fallback": "file-icons:icomoon",
	});
}

export default Component;
