import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/o/o6ivq-w2t.css';
import '../../css/d/dfyd2xg-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="o6ivq-w2t"/><path class="dfyd2xg-n"/></g>`,
		"fallback": "hugeicons:cursor-add-selection-02",
	});
}

export default Component;
