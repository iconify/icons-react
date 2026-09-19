import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6c71_qzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6c71_qzl"/>`,
		"fallback": "file-icons:arm",
	});
}

export default Component;
