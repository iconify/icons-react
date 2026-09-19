import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/chuh-hwdr.css';
import '../../css/m/m9pmmxb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="chuh-hwdr"/><path clip-rule="evenodd" class="m9pmmxb5d"/></g>`,
		"fallback": "icon-park:hand-right",
	});
}

export default Component;
