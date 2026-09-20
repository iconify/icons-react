import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fco0k73cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fco0k73cz"/>`,
		"fallback": "streamline-sharp:cleaning-room-woman-solid",
	});
}

export default Component;
