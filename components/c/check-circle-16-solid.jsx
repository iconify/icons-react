import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpjk6wr9p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fpjk6wr9p"/>`,
		"fallback": "heroicons:check-circle-16-solid",
	});
}

export default Component;
