import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9d36vgse.css';
import '../../css/o/oxkfxll7r.css';
import '../../css/q/qozean2np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v9d36vgse"/><path class="oxkfxll7r"/><path class="qozean2np"/></g>`,
		"fallback": "mynaui:brand-figma",
	});
}

export default Component;
