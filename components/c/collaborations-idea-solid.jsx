import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk3psxb0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gk3psxb0p"/>`,
		"fallback": "streamline:collaborations-idea-solid",
	});
}

export default Component;
