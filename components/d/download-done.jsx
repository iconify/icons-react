import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_-m2b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we_-m2b5j"/>`,
		"fallback": "ci:download-done",
	});
}

export default Component;
