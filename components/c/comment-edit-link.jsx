import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gpmy2hoju.css';
import '../../css/y/yym-h_bij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="gpmy2hoju"/><path vector-effect="non-scaling-stroke" class="yym-h_bij"/></g>`,
		"fallback": "wordpress:comment-edit-link",
	});
}

export default Component;
