import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/byq_hdc2m.css';
import '../../css/u/um04zob7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="byq_hdc2m"/><path class="um04zob7r"/></g>`,
		"fallback": "hugeicons:file-zip",
	});
}

export default Component;
