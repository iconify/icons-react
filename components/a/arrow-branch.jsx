import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvp0-qsza.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvp0-qsza"/>`,
		"fallback": "f7:arrow-branch",
	});
}

export default Component;
