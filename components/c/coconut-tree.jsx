import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l8qk51bcc.css';
import '../../css/w/wk0ll8f3t.css';
import '../../css/w/wsqg7uboe.css';
import '../../css/l/lvfkzebln.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="l8qk51bcc"/><path class="wk0ll8f3t"/><path class="wsqg7uboe"/><path class="lvfkzebln"/></g>`,
		"fallback": "icon-park-outline:coconut-tree",
	});
}

export default Component;
