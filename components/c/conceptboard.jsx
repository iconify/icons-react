import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejshfpu0b.css';
import '../../css/p/pm7rgls4x.css';

const viewBox = {"width":260,"height":260};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejshfpu0b"/><path class="pm7rgls4x"/>`,
		"fallback": "thesvg-color:conceptboard",
	});
}

export default Component;
