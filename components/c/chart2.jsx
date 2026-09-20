import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/thkg0ud3u.css';
import '../../css/j/jjw88sbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="thkg0ud3u"/><path class="jjw88sbws"/></g>`,
		"fallback": "reicon:chart2",
	});
}

export default Component;
