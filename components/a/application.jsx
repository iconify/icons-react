import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yuzfu5k0t.css';
import '../../css/y/ydbv6jbol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="yuzfu5k0t"/><path class="ydbv6jbol"/></g>`,
		"fallback": "icon-park:application",
	});
}

export default Component;
