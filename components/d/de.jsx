import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yzfkwyb_b.css';
import '../../css/c/cu3su9ffu.css';
import '../../css/o/o1sk4_0cf.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yzfkwyb_b"/><path class="cu3su9ffu"/><path class="o1sk4_0cf"/></g>`,
		"fallback": "flagpack:de",
	});
}

export default Component;
