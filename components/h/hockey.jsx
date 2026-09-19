import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/x/xq2db5kru.css';
import '../../css/u/uzxjw3bvb.css';
import '../../css/z/zlv6ucc1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="xq2db5kru"/><path class="uzxjw3bvb"/><path class="zlv6ucc1e"/></g>`,
		"fallback": "icon-park:hockey",
	});
}

export default Component;
