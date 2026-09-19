import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/po3_9rrdr.css';
import '../../css/p/p9chjabid.css';
import '../../css/x/xyhxy--ff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="po3_9rrdr"/><path class="p9chjabid"/><path class="xyhxy--ff"/></g>`,
		"fallback": "icon-park:cloudy-night",
	});
}

export default Component;
