import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/aesi0b2qs.css';
import '../../css/y/y7o7wybuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><rect class="aesi0b2qs"/><path class="y7o7wybuc"/></g>`,
		"fallback": "icon-park:align-top",
	});
}

export default Component;
