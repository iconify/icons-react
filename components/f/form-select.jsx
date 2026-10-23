import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yrmh38esi.css';
import '../../css/t/tz5dcn39z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yrmh38esi"/><path class="tz5dcn39z"/></g>`,
		"fallback": "wordpress:form-select",
	});
}

export default Component;
