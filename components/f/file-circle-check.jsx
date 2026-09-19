import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9gsc0brp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9gsc0brp"/>`,
		"fallback": "fa7-solid:file-circle-check",
	});
}

export default Component;
