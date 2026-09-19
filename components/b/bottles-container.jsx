import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8hgrvbws.css';
import '../../css/q/qagm_33vn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8hgrvbws"/><path class="qagm_33vn"/>`,
		"fallback": "carbon:bottles-container",
	});
}

export default Component;
