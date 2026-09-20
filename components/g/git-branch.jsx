import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4uaq5bdz.css';
import '../../css/z/zo26cob7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4uaq5bdz"/><path class="zo26cob7g"/></g>`,
		"fallback": "tdesign:git-branch",
	});
}

export default Component;
