import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zj5wdiv6o.css';
import '../../css/t/tv1ps05nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zj5wdiv6o"/><path class="tv1ps05nx"/></g>`,
		"fallback": "hugeicons:ai-phone-02",
	});
}

export default Component;
