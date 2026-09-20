import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7p_f2brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7p_f2brl"/>`,
		"fallback": "reicon:book-open-filled",
	});
}

export default Component;
