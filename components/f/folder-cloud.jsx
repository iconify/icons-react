import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ob0lg7brk.css';
import '../../css/b/bvz2mha2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ob0lg7brk"/><path class="bvz2mha2o"/></g>`,
		"fallback": "hugeicons:folder-cloud",
	});
}

export default Component;
