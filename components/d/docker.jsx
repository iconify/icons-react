import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr2v7635b.css';
import '../../css/l/lrjrz-r-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr2v7635b"/><path class="lrjrz-r-z"/>`,
		"fallback": "uim:docker",
	});
}

export default Component;
