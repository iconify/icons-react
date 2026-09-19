import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjyx39bvf.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjyx39bvf"/>`,
		"fallback": "fa6-solid:hand-holding-heart",
	});
}

export default Component;
