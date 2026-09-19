import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etwiq-3gv.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etwiq-3gv"/>`,
		"fallback": "fa-solid:caret-up",
	});
}

export default Component;
