import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u26dwrbdz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u26dwrbdz"/>`,
		"fallback": "f7:checkmark-2",
	});
}

export default Component;
