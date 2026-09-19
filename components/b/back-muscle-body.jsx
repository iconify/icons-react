import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aofse3bqz.css';
import '../../css/i/ihg57lz5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aofse3bqz"/><path class="ihg57lz5g"/></g>`,
		"fallback": "hugeicons:back-muscle-body",
	});
}

export default Component;
