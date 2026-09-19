import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zqk0kknjx.css';
import '../../css/b/b4lfounoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zqk0kknjx"/><path class="b4lfounoz"/></g>`,
		"fallback": "hugeicons:arrow-big-right-dash",
	});
}

export default Component;
