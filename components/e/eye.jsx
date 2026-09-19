import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltn94ccoo.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltn94ccoo"/>`,
		"fallback": "fa6-regular:eye",
	});
}

export default Component;
