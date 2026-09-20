import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhuz6xbtj.css';
import '../../css/f/fueron2wo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhuz6xbtj"/><path clip-rule="evenodd" class="fueron2wo"/>`,
		"fallback": "qlementine-icons:calendar-16",
	});
}

export default Component;
