import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ii7dwjb3q.css';
import '../../css/w/w17amxb6c.css';
import '../../css/v/vzos5zbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ii7dwjb3q"/><path class="w17amxb6c"/><path class="vzos5zbko"/></g>`,
		"fallback": "streamline-ultimate:design-tool-fibonacci",
	});
}

export default Component;
