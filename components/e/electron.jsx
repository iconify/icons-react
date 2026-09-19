import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnxad5b3b.css';

const viewBox = {"width":474,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnxad5b3b"/>`,
		"fallback": "file-icons:electron",
	});
}

export default Component;
