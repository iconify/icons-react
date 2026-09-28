import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jb730ab3d.css';
import '../../css/z/zhe5xmgrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="jb730ab3d"/><path vector-effect="non-scaling-stroke" class="zhe5xmgrw"/></g>`,
		"fallback": "wordpress:heading-level-6",
	});
}

export default Component;
