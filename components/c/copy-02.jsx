import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r2cuxi1mh.css';
import '../../css/f/f7a9lcb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r2cuxi1mh"/><path class="f7a9lcb3a"/></g>`,
		"fallback": "hugeicons:copy-02",
	});
}

export default Component;
