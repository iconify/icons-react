import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f29fwjbso.css';
import '../../css/j/jyuddqs9y.css';
import '../../css/f/fv37sub-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f29fwjbso"/><path class="jyuddqs9y"/><path class="fv37sub-u"/></g>`,
		"fallback": "lucide-extended:git-commit-horizontal-duotone",
	});
}

export default Component;
