import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk94k7bmi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk94k7bmi"/>`,
		"fallback": "osmic:beauty-14",
	});
}

export default Component;
