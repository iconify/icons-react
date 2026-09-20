import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwo9clbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwo9clbmj"/>`,
		"fallback": "ri:coin-line",
	});
}

export default Component;
