import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwv58h7bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zwv58h7bj"/>`,
		"fallback": "streamline-logos:about-me-logo-solid",
	});
}

export default Component;
