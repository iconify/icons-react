import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5j_ri7jk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5j_ri7jk"/>`,
		"fallback": "f7:eyedropper",
	});
}

export default Component;
