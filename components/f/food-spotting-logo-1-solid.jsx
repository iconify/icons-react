import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr-sxhb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kr-sxhb1l"/>`,
		"fallback": "streamline-logos:food-spotting-logo-1-solid",
	});
}

export default Component;
