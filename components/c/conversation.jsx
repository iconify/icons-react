import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uedtu89cj.css';
import '../../css/b/b2m7ke2wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uedtu89cj"/><path class="b2m7ke2wk"/>`,
		"fallback": "bxs:conversation",
	});
}

export default Component;
