import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/w5et9iy0x.css';
import '../../css/x/xswrwubyq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="w5et9iy0x"/><path class="xswrwubyq"/></g>`,
		"fallback": "icon-park:audit",
	});
}

export default Component;
