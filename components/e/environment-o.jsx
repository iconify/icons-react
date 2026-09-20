import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkm6zb_kd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkm6zb_kd"/>`,
		"fallback": "uiw:environment-o",
	});
}

export default Component;
