import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v51606bos.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v51606bos"/>`,
		"fallback": "fontisto:copy",
	});
}

export default Component;
