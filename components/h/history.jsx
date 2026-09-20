import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb2xhv94q.css';
import '../../css/r/r-fuctb7v.css';
import '../../css/y/y8gsoobat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb2xhv94q"/><path class="r-fuctb7v"/><path class="y8gsoobat"/>`,
		"fallback": "uim:history",
	});
}

export default Component;
