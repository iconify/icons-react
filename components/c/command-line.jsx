import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rw-xz9jys.css';
import '../../css/l/lrh1frbmj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rw-xz9jys"/><path class="lrh1frbmj"/></g>`,
		"fallback": "hugeicons:command-line",
	});
}

export default Component;
