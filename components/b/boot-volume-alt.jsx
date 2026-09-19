import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x93jqtbel.css';
import '../../css/w/wk2d_zbto.css';
import '../../css/n/nc-ntg30u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x93jqtbel"/><path class="wk2d_zbto"/><path class="nc-ntg30u"/>`,
		"fallback": "carbon:boot-volume-alt",
	});
}

export default Component;
