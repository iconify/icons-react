import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxpig_jqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxpig_jqy"/>`,
		"fallback": "mdi:high-beam",
	});
}

export default Component;
