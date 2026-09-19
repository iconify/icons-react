import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/m0xrrzbhk.css';
import '../../css/a/a188s0iwo.css';
import '../../css/q/qwkyr7biq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="m0xrrzbhk"/><path class="a188s0iwo"/><path class="qwkyr7biq"/></g>`,
		"fallback": "icon-park:folder-plus",
	});
}

export default Component;
