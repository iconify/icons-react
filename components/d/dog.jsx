import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4r_6ibkx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4r_6ibkx"/>`,
		"fallback": "f7:dog",
	});
}

export default Component;
