import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-y2n7b-y.css';
import '../../css/y/ynjeod88n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-y2n7b-y"/><path class="ynjeod88n"/></g>`,
		"fallback": "iconoir:fire-flame",
	});
}

export default Component;
