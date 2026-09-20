import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1-dclb0l.css';
import '../../css/n/nuuqustnb.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1-dclb0l"/><path class="nuuqustnb"/>`,
		"fallback": "tdesign:data-search-filled",
	});
}

export default Component;
