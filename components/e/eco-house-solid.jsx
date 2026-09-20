import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2nilsb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2nilsb3b"/>`,
		"fallback": "streamline-sharp:eco-house-solid",
	});
}

export default Component;
