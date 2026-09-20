import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teur4xb4a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="teur4xb4a"/>`,
		"fallback": "streamline:galaxy-2-solid",
	});
}

export default Component;
