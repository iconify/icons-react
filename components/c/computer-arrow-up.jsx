import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/ja08tibwd.css';
import '../../css/x/x35r01b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ja08tibwd"/><path class="x35r01b7l"/></g>`,
		"fallback": "hugeicons:computer-arrow-up",
	});
}

export default Component;
