import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6ob-bos.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly6ob-bos"/>`,
		"fallback": "f7:cloud-sun-bolt-fill",
	});
}

export default Component;
