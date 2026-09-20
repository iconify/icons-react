import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ajclsexjd.css';
import '../../css/x/x89mmzb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ajclsexjd"/><path class="x89mmzb6b"/></g>`,
		"fallback": "streamline-sharp:decent-work-and-economic-growth",
	});
}

export default Component;
