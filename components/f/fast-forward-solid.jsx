import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_1mesb2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_1mesb2l"/>`,
		"fallback": "basil:fast-forward-solid",
	});
}

export default Component;
