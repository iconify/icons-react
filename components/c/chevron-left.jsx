import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q773o0ljf.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q773o0ljf"/>`,
		"fallback": "f7:chevron-left",
	});
}

export default Component;
