import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aws265bny.css';
import '../../css/p/p8r-0jx0k.css';
import '../../css/m/mt7fmg7xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aws265bny"/><path class="p8r-0jx0k"/><path class="mt7fmg7xj"/></g>`,
		"fallback": "hugeicons:book-copy",
	});
}

export default Component;
