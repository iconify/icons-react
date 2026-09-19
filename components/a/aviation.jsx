import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/ynccdtb1k.css';
import '../../css/z/z6t0ywb2m.css';
import '../../css/y/y18p54b9l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="ynccdtb1k"/><path class="z6t0ywb2m"/><path class="y18p54b9l"/></g>`,
		"fallback": "icon-park:aviation",
	});
}

export default Component;
