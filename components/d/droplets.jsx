import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/ta5copbhj.css';
import '../../css/h/hb2a_krih.css';
import '../../css/w/w3oktt3kj.css';
import '../../css/a/avb7c9bnj.css';
import '../../css/p/puipgzb4d.css';
import '../../css/n/n0mvu2bcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ta5copbhj wm-shadow"/><path class="hb2a_krih"/><path class="w3oktt3kj"/><path class="avb7c9bnj"/><path class="puipgzb4d"/><path class="n0mvu2bcy"/></g>`,
		"fallback": "withicons-retro:droplets",
	});
}

export default Component;
