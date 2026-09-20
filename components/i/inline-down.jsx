import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgyzpub_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgyzpub_i"/>`,
		"fallback": "quill:inline-down",
	});
}

export default Component;
