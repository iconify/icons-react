import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdgq2lbcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdgq2lbcw"/>`,
		"fallback": "iconaut:heading-2-solid",
	});
}

export default Component;
