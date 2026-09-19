import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx777smff.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx777smff"/>`,
		"fallback": "fa7-solid:balance-scale-right",
	});
}

export default Component;
