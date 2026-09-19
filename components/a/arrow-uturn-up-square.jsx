import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt8f_wtrz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt8f_wtrz"/>`,
		"fallback": "f7:arrow-uturn-up-square",
	});
}

export default Component;
