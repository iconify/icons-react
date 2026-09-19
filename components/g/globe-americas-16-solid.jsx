import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt7-flo0i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zt7-flo0i"/>`,
		"fallback": "heroicons:globe-americas-16-solid",
	});
}

export default Component;
