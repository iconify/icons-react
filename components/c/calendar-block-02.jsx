import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l6b-pdb0n.css';
import '../../css/o/o0r0c9bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l6b-pdb0n"/><path class="o0r0c9bbs"/></g>`,
		"fallback": "hugeicons:calendar-block-02",
	});
}

export default Component;
