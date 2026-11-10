import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hk7cqce6e.css';
import '../../css/w/w4tfkkbql.css';
import '../../css/j/jplvnrbiz.css';
import '../../css/x/xxgrbp8be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hk7cqce6e"/><path class="w4tfkkbql"/><path class="jplvnrbiz"/><path class="xxgrbp8be"/></g>`,
		"fallback": "andrsrxn:diploma-check-badge",
	});
}

export default Component;
