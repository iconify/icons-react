import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gt1k1wbel.css';
import '../../css/z/zf3g4d_ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gt1k1wbel"/><path class="zf3g4d_ts"/></g>`,
		"fallback": "hugeicons:archive",
	});
}

export default Component;
