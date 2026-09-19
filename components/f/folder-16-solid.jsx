import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0-5aw7dw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0-5aw7dw"/>`,
		"fallback": "heroicons:folder-16-solid",
	});
}

export default Component;
