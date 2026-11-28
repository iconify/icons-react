import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb45z8maj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb45z8maj"/>`,
		"fallback": "iconaut:ferry-solid",
	});
}

export default Component;
