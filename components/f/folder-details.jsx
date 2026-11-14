import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u9xtr9bvt.css';
import '../../css/p/pcki9vn9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u9xtr9bvt"/><path class="pcki9vn9e"/></g>`,
		"fallback": "hugeicons:folder-details",
	});
}

export default Component;
