import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5evaxbui.css';
import '../../css/b/bhbvqjyxk.css';
import '../../css/k/kr2jicboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j5evaxbui"/><rect class="bhbvqjyxk"/><rect class="kr2jicboj"/>`,
		"fallback": "boxicons:grid-circle-diagonal-left-filled",
	});
}

export default Component;
