import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udfsdub4u.css';
import '../../css/j/j18dvotij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udfsdub4u"/><path class="j18dvotij"/>`,
		"fallback": "energy-icons:book-20",
	});
}

export default Component;
