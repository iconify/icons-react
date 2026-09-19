import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/e8k5a4b4i.css';
import '../../css/s/sxk3gr95p.css';
import '../../css/w/wkt54un3o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="e8k5a4b4i"/><path class="sxk3gr95p"/><path class="wkt54un3o"/></g>`,
		"fallback": "icon-park:book-one",
	});
}

export default Component;
