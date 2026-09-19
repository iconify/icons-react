import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5_tenb6v.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5_tenb6v"/>`,
		"fallback": "f7:goforward-60",
	});
}

export default Component;
