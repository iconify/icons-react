import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t9kj0wniw.css';
import '../../css/x/x8nf3k1cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t9kj0wniw"/><path class="x8nf3k1cn"/></g>`,
		"fallback": "hugeicons:hard-drive",
	});
}

export default Component;
