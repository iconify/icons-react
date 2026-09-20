import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qa_01i7re.css';
import '../../css/l/ljyosybrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qa_01i7re"/><path class="ljyosybrt"/></g>`,
		"fallback": "streamline-cyber-color:focus-3",
	});
}

export default Component;
