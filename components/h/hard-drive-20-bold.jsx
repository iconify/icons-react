import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epfqiub8e.css';
import '../../css/b/bx-ljfbkz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epfqiub8e"/><path class="bx-ljfbkz"/>`,
		"fallback": "energy-icons:hard-drive-20-bold",
	});
}

export default Component;
