import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2m5zi2on.css';
import '../../css/y/yadluib6y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2m5zi2on"/><path class="yadluib6y"/>`,
		"fallback": "carbon:ibm-ibv",
	});
}

export default Component;
