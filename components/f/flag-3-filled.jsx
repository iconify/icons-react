import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak6i94bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak6i94bci"/>`,
		"fallback": "tdesign:flag-3-filled",
	});
}

export default Component;
