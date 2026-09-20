import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2sjr9b1a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2sjr9b1a"/>`,
		"fallback": "streamline:gramophone-solid",
	});
}

export default Component;
