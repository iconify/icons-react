import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cr6vb84ov.css';
import '../../css/k/kdw9f6x7v.css';
import '../../css/m/mu_a5xqvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cr6vb84ov"/><path class="kdw9f6x7v"/><path class="mu_a5xqvm"/>`,
		"fallback": "uim:box",
	});
}

export default Component;
