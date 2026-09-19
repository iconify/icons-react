import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zivfc9bcg.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zivfc9bcg"/>`,
		"fallback": "f7:arrow-up-left-square-fill",
	});
}

export default Component;
