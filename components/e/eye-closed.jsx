import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_zgzfbvq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_zgzfbvq"/>`,
		"fallback": "radix-icons:eye-closed",
	});
}

export default Component;
