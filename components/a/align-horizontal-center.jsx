import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2z0d68sn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2z0d68sn"/>`,
		"fallback": "fluent-mdl2:align-horizontal-center",
	});
}

export default Component;
