import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-x0dsblc.css';
import '../../css/m/m3qytymuy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-x0dsblc"/><path class="m3qytymuy"/>`,
		"fallback": "carbon:forward-10",
	});
}

export default Component;
