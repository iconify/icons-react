import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqmj-2b7m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqmj-2b7m"/>`,
		"fallback": "quill:checkmark",
	});
}

export default Component;
