import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j852ylbcm.css';
import '../../css/i/im9q6tt0h.css';
import '../../css/z/zs0rlhisk.css';
import '../../css/b/ba90tvb7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j852ylbcm"/><path class="im9q6tt0h"/><path clip-rule="evenodd" class="zs0rlhisk"/><path class="ba90tvb7b"/></g>`,
		"fallback": "healthicons:blood-rh-n-outline",
	});
}

export default Component;
