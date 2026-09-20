import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzf_cpbsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzf_cpbsh"/>`,
		"fallback": "mynaui:book-off",
	});
}

export default Component;
