import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/g/gt-c4c-ym.css';
import '../../css/i/ixnp5nnxm.css';
import '../../css/x/x10p4zclm.css';
import '../../css/c/c3bwx9daf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path clip-rule="evenodd" class="gt-c4c-ym"/><path clip-rule="evenodd" class="ixnp5nnxm"/><path clip-rule="evenodd" class="x10p4zclm"/><path clip-rule="evenodd" class="c3bwx9daf"/></g>`,
		"fallback": "skill-icons:bash-light",
	});
}

export default Component;
