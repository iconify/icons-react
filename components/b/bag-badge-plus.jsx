import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpymsok3o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpymsok3o"/>`,
		"fallback": "f7:bag-badge-plus",
	});
}

export default Component;
