import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/puo6m7bvm.css';
import '../../css/b/bmiu8w0sc.css';
import '../../css/c/cmsqj627t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="puo6m7bvm"/><path class="bmiu8w0sc"/><path class="cmsqj627t"/></g>`,
		"fallback": "iconoir:fingerprint",
	});
}

export default Component;
