import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bem_48t0b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bem_48t0b"/>`,
		"fallback": "whh:city",
	});
}

export default Component;
