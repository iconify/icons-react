import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjpro_u9e.css';
import '../../css/q/q0wqs_b6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjpro_u9e"/><path class="q0wqs_b6r"/>`,
		"fallback": "ion:create-sharp",
	});
}

export default Component;
