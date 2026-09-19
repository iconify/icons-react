import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neukm1fuz.css';
import '../../css/b/bhbvqjyxk.css';
import '../../css/k/kr2jicboj.css';
import '../../css/a/au_2_ma1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="neukm1fuz"/><rect class="bhbvqjyxk"/><rect class="kr2jicboj"/><path class="au_2_ma1r"/>`,
		"fallback": "boxicons:grid-plus-filled",
	});
}

export default Component;
