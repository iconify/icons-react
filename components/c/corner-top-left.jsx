import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gucwjdsty.css';
import '../../css/l/lpcvnqk4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="gucwjdsty"/><path vector-effect="non-scaling-stroke" class="lpcvnqk4w"/></g>`,
		"fallback": "wordpress:corner-top-left",
	});
}

export default Component;
