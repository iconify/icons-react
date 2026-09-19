import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/y5mas4nwd.css';
import '../../css/g/gcng8vetl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="y5mas4nwd"/><path class="gcng8vetl"/></g>`,
		"fallback": "icon-park:home-two",
	});
}

export default Component;
