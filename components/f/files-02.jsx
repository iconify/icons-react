import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ib0yc8bbq.css';
import '../../css/q/qd3yxt-_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ib0yc8bbq"/><path class="qd3yxt-_e"/></g>`,
		"fallback": "hugeicons:files-02",
	});
}

export default Component;
