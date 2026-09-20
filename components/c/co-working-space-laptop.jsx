import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bqhkz0qmt.css';
import '../../css/r/rdnzf0b1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="bqhkz0qmt"/><path class="rdnzf0b1n"/></g>`,
		"fallback": "streamline-ultimate:co-working-space-laptop",
	});
}

export default Component;
