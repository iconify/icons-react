import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpw0hrbqk.css';
import '../../css/z/zdracac6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpw0hrbqk"/><path class="zdracac6l"/>`,
		"fallback": "famicons:bed-outline",
	});
}

export default Component;
