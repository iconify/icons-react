import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1iksibdf.css';

const viewBox = {"width":502,"height":772};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1iksibdf"/>`,
		"fallback": "ls:0",
	});
}

export default Component;
