import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo37sdstw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo37sdstw"/>`,
		"fallback": "iconaut:flow-manual-operation-solid",
	});
}

export default Component;
