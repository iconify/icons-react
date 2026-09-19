import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jldg2jb9v.css';
import '../../css/p/p85xbuxvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jldg2jb9v"/><path class="p85xbuxvk"/></g>`,
		"fallback": "covid:covid-carrier-blood-1",
	});
}

export default Component;
