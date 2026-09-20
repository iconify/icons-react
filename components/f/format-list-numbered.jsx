import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hjk15qw-b.css';
import '../../css/r/rbyek3b2v.css';
import '../../css/y/yxph-hmed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="hjk15qw-b"/><path vector-effect="non-scaling-stroke" class="rbyek3b2v"/><path vector-effect="non-scaling-stroke" class="yxph-hmed"/></g>`,
		"fallback": "wordpress:format-list-numbered",
	});
}

export default Component;
