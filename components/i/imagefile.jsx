import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk9dx8b8d.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk9dx8b8d"/>`,
		"fallback": "wpf:imagefile",
	});
}

export default Component;
