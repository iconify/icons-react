import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljm7f5bgo.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljm7f5bgo"/>`,
		"fallback": "fluent-mdl2:caret-top-left-center-8",
	});
}

export default Component;
