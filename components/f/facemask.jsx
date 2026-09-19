import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tchv4_7zc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tchv4_7zc"/>`,
		"fallback": "f7:facemask",
	});
}

export default Component;
