import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wejky2bbi.css';
import '../../css/m/my2izt4pi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="wejky2bbi"/><path class="my2izt4pi"/></g>`,
		"fallback": "icon-park:experiment-one",
	});
}

export default Component;
