import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqad6ybxx.css';
import '../../css/l/lnu_gcc9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqad6ybxx"/><path class="lnu_gcc9t"/>`,
		"fallback": "streamline-freehand:home",
	});
}

export default Component;
