import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwcoh5b4b.css';
import '../../css/r/r-ls0rn8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwcoh5b4b"/><path class="r-ls0rn8e"/>`,
		"fallback": "bx:bx-stopwatch",
	});
}

export default Component;
