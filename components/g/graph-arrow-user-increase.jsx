import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/z1927kswi.css';
import '../../css/m/m8sa_8aqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="z1927kswi"/><path class="m8sa_8aqs"/></g>`,
		"fallback": "streamline-plump:graph-arrow-user-increase",
	});
}

export default Component;
