import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlw7c8bcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlw7c8bcw"/>`,
		"fallback": "hugeicons:grid",
	});
}

export default Component;
