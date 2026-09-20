import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/koq391beo.css';
import '../../css/y/y5nwozvzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="koq391beo"/><path class="y5nwozvzb"/></g>`,
		"fallback": "streamline-ultimate:arrow-thick-up-4",
	});
}

export default Component;
