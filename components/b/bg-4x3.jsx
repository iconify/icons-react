import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbsiz1bro.css';
import '../../css/j/jt_ac1zjj.css';
import '../../css/c/c5zqg9bcz.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbsiz1bro"/><path class="jt_ac1zjj"/><path class="c5zqg9bcz"/>`,
		"fallback": "flag:bg-4x3",
	});
}

export default Component;
