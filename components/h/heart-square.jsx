import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk3tahbdx.css';
import '../../css/h/hh66d4b6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk3tahbdx"/><path class="hh66d4b6s"/>`,
		"fallback": "bx:heart-square",
	});
}

export default Component;
