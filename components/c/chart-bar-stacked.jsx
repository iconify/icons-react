import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bznyk4v8u.css';
import '../../css/w/wyt8hgbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bznyk4v8u"/><path class="wyt8hgbsx"/></g>`,
		"fallback": "hugeicons:chart-bar-stacked",
	});
}

export default Component;
