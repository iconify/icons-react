import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ocn9i_f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ocn9i_f"/>`,
		"fallback": "heroicons:ellipsis-vertical-20-solid",
	});
}

export default Component;
