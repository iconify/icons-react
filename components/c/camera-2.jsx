import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a9bub1fqj.css';
import '../../css/q/qsokfzbll.css';
import '../../css/f/fbsjc3a0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect class="a9bub1fqj"/><circle class="qsokfzbll"/><path class="fbsjc3a0u"/></g>`,
		"fallback": "mage:camera-2",
	});
}

export default Component;
