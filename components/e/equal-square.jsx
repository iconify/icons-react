import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoix4ob1l.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoix4ob1l"/>`,
		"fallback": "f7:equal-square",
	});
}

export default Component;
