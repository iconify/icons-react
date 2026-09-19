import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf6dpzmng.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf6dpzmng"/>`,
		"fallback": "f7:building-2",
	});
}

export default Component;
