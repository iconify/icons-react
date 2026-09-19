import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzc-6c3do.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzc-6c3do"/>`,
		"fallback": "f7:app-badge",
	});
}

export default Component;
