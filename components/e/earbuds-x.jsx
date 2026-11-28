import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/turzsbbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="turzsbbcl"/>`,
		"fallback": "noviair:earbuds-x",
	});
}

export default Component;
