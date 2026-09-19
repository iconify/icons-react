import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zl1fhm3-r.css';
import '../../css/x/xkr8jvbze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="zl1fhm3-r"/><path class="xkr8jvbze"/></g>`,
		"fallback": "icon-park:high-light",
	});
}

export default Component;
