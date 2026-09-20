import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq-l14o0w.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq-l14o0w"/>`,
		"fallback": "wpf:cloud",
	});
}

export default Component;
