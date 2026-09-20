import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f90pbrb7k.css';
import '../../css/f/f0gec-0wf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="f90pbrb7k"/><path vector-effect="non-scaling-stroke" class="f0gec-0wf"/></g>`,
		"fallback": "wordpress:corner-bottom-left",
	});
}

export default Component;
