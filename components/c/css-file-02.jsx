import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cjt-mmb4n.css';
import '../../css/z/zv0c_vwto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cjt-mmb4n"/><path class="zv0c_vwto"/></g>`,
		"fallback": "hugeicons:css-file-02",
	});
}

export default Component;
