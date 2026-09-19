import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/be-x2lgok.css';
import '../../css/j/j0991s5ot.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="be-x2lgok"/><path clip-rule="evenodd" class="j0991s5ot"/><path clip-rule="evenodd" class="daxtkab1a"/>`,
		"fallback": "basil:instagram-outline",
	});
}

export default Component;
