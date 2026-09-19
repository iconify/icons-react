import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7usi5bjs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7usi5bjs"/>`,
		"fallback": "fa7-regular:face-sad-tear",
	});
}

export default Component;
