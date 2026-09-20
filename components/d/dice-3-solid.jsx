import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3zjk--8b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w3zjk--8b"/>`,
		"fallback": "streamline:dice-3-solid",
	});
}

export default Component;
