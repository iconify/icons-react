import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj9a63b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rj9a63b8k"/>`,
		"fallback": "streamline-logos:bnter-logo-solid",
	});
}

export default Component;
