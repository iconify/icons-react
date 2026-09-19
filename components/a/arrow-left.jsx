import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6dt2jltz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6dt2jltz"/>`,
		"fallback": "f7:arrow-left",
	});
}

export default Component;
