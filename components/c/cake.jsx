import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/b689fibxa.css';
import '../../css/b/byxdlpbyc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="b689fibxa"/><path class="byxdlpbyc"/></g>`,
		"fallback": "icon-park-outline:cake",
	});
}

export default Component;
