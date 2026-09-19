import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y61lkwrsl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y61lkwrsl"/>`,
		"fallback": "fa7-regular:face-smile-beam",
	});
}

export default Component;
