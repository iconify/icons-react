import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpcumh7bv.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpcumh7bv"/>`,
		"fallback": "wpf:cursor",
	});
}

export default Component;
