import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw6wd9x6j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw6wd9x6j"/>`,
		"fallback": "f7:at-badge-plus",
	});
}

export default Component;
