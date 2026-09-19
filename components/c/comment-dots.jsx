import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/t/th8c65bcd.css';
import '../../css/g/geroo2bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="th8c65bcd"/><path class="geroo2bsw"/></g>`,
		"fallback": "iconamoon:comment-dots",
	});
}

export default Component;
