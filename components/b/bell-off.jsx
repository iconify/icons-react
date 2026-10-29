import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o41q9kq7g.css';
import '../../css/j/j_i6_dbmq.css';
import '../../css/k/kzbsc1b0y.css';
import '../../css/y/ylyu3o1hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o41q9kq7g wm-k"/><path class="j_i6_dbmq wm-k"/><path class="kzbsc1b0y wm-k"/><path class="wm-s ylyu3o1hk"/>`,
		"fallback": "withicons-bauhaus:bell-off",
	});
}

export default Component;
