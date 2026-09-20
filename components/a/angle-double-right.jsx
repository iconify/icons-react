import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h149-xhjx.css';
import '../../css/e/esvqany8h.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h149-xhjx"/><path class="esvqany8h"/>`,
		"fallback": "lineicons:angle-double-right",
	});
}

export default Component;
