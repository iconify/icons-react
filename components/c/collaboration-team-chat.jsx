import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x8nd1sqde.css';
import '../../css/s/s5qm4sj2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x8nd1sqde"/><path class="s5qm4sj2w"/></g>`,
		"fallback": "streamline-freehand:collaboration-team-chat",
	});
}

export default Component;
