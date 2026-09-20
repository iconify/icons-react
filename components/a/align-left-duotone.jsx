import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9_-x2-td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9_-x2-td"/>`,
		"fallback": "si:align-left-duotone",
	});
}

export default Component;
