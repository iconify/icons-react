import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x589rabvv.css';
import '../../css/n/nr04m232v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="x589rabvv"/><path vector-effect="non-scaling-stroke" class="nr04m232v"/></g>`,
		"fallback": "wordpress:comment-author-name",
	});
}

export default Component;
