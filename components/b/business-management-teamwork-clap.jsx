import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vja0l2bvg.css';
import '../../css/l/l3jb9k58e.css';
import '../../css/b/baz0habwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vja0l2bvg"/><path class="l3jb9k58e"/><path class="baz0habwe"/></g>`,
		"fallback": "streamline-freehand:business-management-teamwork-clap",
	});
}

export default Component;
