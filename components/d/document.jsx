import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jugg-dbvr.css';
import '../../css/r/rf3rjbcgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="jugg-dbvr"/><path class="rf3rjbcgz"/></g>`,
		"fallback": "proicons:document",
	});
}

export default Component;
