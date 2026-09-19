import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/p/pby3-ccaw.css';
import '../../css/a/aqh3xx5vt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="pby3-ccaw"/><path clip-rule="evenodd" class="aqh3xx5vt"/></g>`,
		"fallback": "icon-park:hand-down",
	});
}

export default Component;
