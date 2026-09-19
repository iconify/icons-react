import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0ni1ku-r.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0ni1ku-r"/>`,
		"fallback": "el:fast-backward",
	});
}

export default Component;
