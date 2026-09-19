import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_usspbyi.css';
import '../../css/n/n44wcqy3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y_usspbyi"/><path class="n44wcqy3s"/></g>`,
		"fallback": "hugeicons:calendars",
	});
}

export default Component;
