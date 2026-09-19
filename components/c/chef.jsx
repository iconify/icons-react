import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkov3hnmg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkov3hnmg"/>`,
		"fallback": "file-icons:chef",
	});
}

export default Component;
