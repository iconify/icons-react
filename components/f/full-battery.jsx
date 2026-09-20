import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr5qf2b2y.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr5qf2b2y"/>`,
		"fallback": "wpf:full-battery",
	});
}

export default Component;
