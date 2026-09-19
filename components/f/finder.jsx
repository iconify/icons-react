import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s6q5tnmex.css';
import '../../css/d/dugkeub-s.css';
import '../../css/e/ehf885ncn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s6q5tnmex"/><path class="dugkeub-s"/><path class="ehf885ncn"/></g>`,
		"fallback": "iconoir:finder",
	});
}

export default Component;
