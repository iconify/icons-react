import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m3q5dgd3j.css';
import '../../css/u/u7o5kg02o.css';
import '../../css/p/p2fb2ojkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="m3q5dgd3j"/><path class="u7o5kg02o"/><path vector-effect="non-scaling-stroke" class="p2fb2ojkw"/></g>`,
		"fallback": "wordpress:format-list-bullets-rtl",
	});
}

export default Component;
