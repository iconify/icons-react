import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr2nmsnyl.css';
import '../../css/o/ono4a3f1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr2nmsnyl"/><path clip-rule="evenodd" class="ono4a3f1o"/>`,
		"fallback": "basil:comment-plus-outline",
	});
}

export default Component;
