import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yjjlwvb-f.css';
import '../../css/e/eorltabqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="yjjlwvb-f"/><path vector-effect="non-scaling-stroke" class="eorltabqg"/></g>`,
		"fallback": "wordpress:help",
	});
}

export default Component;
