import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eebfe6rrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eebfe6rrv"/>`,
		"fallback": "coolicons:accessibility-alt-round",
	});
}

export default Component;
