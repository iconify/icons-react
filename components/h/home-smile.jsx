import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ui3ncabcp.css';
import '../../css/w/wnr372cff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ui3ncabcp"/><path class="wnr372cff"/></g>`,
		"fallback": "mynaui:home-smile",
	});
}

export default Component;
