import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cjt-mmb4n.css';
import '../../css/o/ops-mtbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cjt-mmb4n"/><path class="ops-mtbfc"/></g>`,
		"fallback": "hugeicons:gif-02",
	});
}

export default Component;
