import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yle_06b4x.css';
import '../../css/r/r14k82bhm.css';
import '../../css/e/egcu1pv4r.css';
import '../../css/p/pwl9v1bkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yle_06b4x"/><path class="r14k82bhm"/><path class="egcu1pv4r"/><path class="pwl9v1bkd"/></g>`,
		"fallback": "streamline-ultimate:binocular",
	});
}

export default Component;
