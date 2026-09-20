import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m14mvl26y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m14mvl26y"/>`,
		"fallback": "tdesign:arrow-up-down-3",
	});
}

export default Component;
