import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnids9u8z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnids9u8z"/>`,
		"fallback": "streamline:align-back-1-solid",
	});
}

export default Component;
