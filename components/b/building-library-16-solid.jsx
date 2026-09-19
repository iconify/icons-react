import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl_3kfblh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sl_3kfblh"/>`,
		"fallback": "heroicons:building-library-16-solid",
	});
}

export default Component;
