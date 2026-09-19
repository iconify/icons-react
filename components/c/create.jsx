import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv8czdbir.css';
import '../../css/t/ti_zwx44j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv8czdbir"/><path class="ti_zwx44j"/>`,
		"fallback": "ion:create",
	});
}

export default Component;
