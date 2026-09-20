import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7re2jb2j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7re2jb2j"/>`,
		"fallback": "uiw:date",
	});
}

export default Component;
