import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_jvqabpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_jvqabpa"/>`,
		"fallback": "prime:caret-right",
	});
}

export default Component;
