import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h92865b4u.css';
import '../../css/m/mlm_wgb7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h92865b4u"/><path class="mlm_wgb7r"/></g>`,
		"fallback": "reicon:heart-search",
	});
}

export default Component;
