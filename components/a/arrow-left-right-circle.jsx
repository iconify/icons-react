import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpz-9jmja.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpz-9jmja"/>`,
		"fallback": "f7:arrow-left-right-circle",
	});
}

export default Component;
