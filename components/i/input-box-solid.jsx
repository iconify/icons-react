import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwg4w1bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iwg4w1bhl"/>`,
		"fallback": "streamline-sharp:input-box-solid",
	});
}

export default Component;
