import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt4irjb1z.css';
import '../../css/j/j1l1dn0pt.css';
import '../../css/f/fzlvvvb1y.css';
import '../../css/n/na016ccky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt4irjb1z wm-a"/><path class="j1l1dn0pt wm-k"/><path class="fzlvvvb1y wm-k"/><path class="na016ccky wm-k"/>`,
		"fallback": "withicons-bauhaus:cup-soda",
	});
}

export default Component;
